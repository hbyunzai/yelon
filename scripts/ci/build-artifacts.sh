#!/usr/bin/env bash
set -u -e -o pipefail

# project path
readonly p_project=$(cd $(dirname $0)/../.. | pwd)
readonly p_dist=${p_project}/dist
readonly p_build_dir=${p_dist}/publish

# commit message
readonly commit_sha=$(git rev-parse --short HEAD)
readonly commit_author_name=$(git --no-pager show -s --format='%an' HEAD)
readonly commit_author_email=$(git --no-pager show -s --format='%ae' HEAD)
readonly commit_message=$(git log --oneline -n 1)
readonly commit_message_check=$(git log --oneline -n 2)

# repo message
readonly repo_name=yelon-builds
readonly repo_url="https://github.com/hbyunzai/${repo_name}.git"
readonly repo_dir=${p_dist}/${repo_name}
readonly repo_branch=master

# build message
readonly build_version=$(node -pe "require('./package.json').version")
readonly build_version_name="${build_version}-${commit_sha}"
readonly build_tag_name="${repo_branch}-${commit_sha}"
readonly build_commit_message="${repo_branch} - ${commit_message}"

# build
${p_project}/scripts/ci/build.sh -scaffold -packages -less -schematics

# validate token and dirs
echo "Current commit author name: ${commit_author_name}"
echo "Starting publish process ${build_version} into ${repo_branch}.."

if [ -z ${ACCESS_TOKEN} ]; then
    echo "Error: No access token for GitHub could be found." \
        "Please set the environment variable 'ACCESS_TOKEN'."
    exit 0
fi

if [ -d ${p_build_dir} ]; then
    rm -rf ${p_build_dir}
fi
mkdir -p ${p_build_dir}

if [ -d ${repo_dir} ]; then
    rm -rf ${repo_dir}
fi
mkdir -p ${repo_dir}

# copy builds
cp -r ${p_dist}/@yelon ${p_build_dir}/@yelon
cp -r ${p_dist}/ng-yunzai ${p_build_dir}/ng-yunzai

# clone yelon-builds and checkout master
echo "Starting cloning process of ${repo_url} into ${repo_dir}.."
if [[ $(git ls-remote --heads ${repo_url} ${repo_branch}) ]]; then
    echo "Branch ${repo_branch} already exists. Cloning that branch."
    git clone ${repo_url} ${repo_dir} --depth 1 --branch ${repo_branch}
    echo "Cloned repository and switched into the repository directory (${repo_dir})."
else
    echo "Branch ${repo_branch} does not exist on ${repo_name} yet."
    echo "Cloning default branch and creating branch '${repo_branch}' on top of it."
    git clone ${repo_url} ${repo_dir} --depth 1
    cd ${repo_dir}
    echo "Cloned repository and switched into directory. Creating new branch now.."
    git checkout -b ${repo_branch}
fi

# clean yelon-builds and copy builds to here
cd ${repo_dir}
rm -rf ./*
cp -r ${p_build_dir}/* ./
echo "Removed everything from ${repo_name}#${repo_branch} and added the new build output."
printf "current dir %s\n" $(pwd)

# change version
if [[ $commit_message_check =~ "release(" ]]; then
    echo "===== Release version does not need to change version ====="
else
    echo "Replace build version..."
    sed -i "" "s/${build_version}/${build_version_name}/g" $(find . -type f -not -path '*\/.*' -name 'theme.js' -o -name 'package.json')
fi

# prepare git
git config user.name "${commit_author_name}"
git config user.email "${commit_author_email}"
git config credential.helper "store --file=.git/credentials"
echo "https://${ACCESS_TOKEN}:@github.com" >.git/credentials

# push tag
if [[ $(git ls-remote origin "refs/tags/${build_tag_name}") ]]; then
    echo "removed tag because tag is already published"
    git push origin :refs/tags/${build_tag_name}
fi
echo "Git configuration has been updated to match the last commit author. Publishing now.."

# push
git add -A
git commit --allow-empty -m "${build_commit_message}"
git tag "${build_tag_name}"
git push origin ${repo_branch} --tags
echo "Published package artifacts for ${repo_name}#${build_version_name} into ${repo_branch}"
if [[ $commit_message_check =~ "release(" ]]; then
    echo "Release version does not need to change version ====="
    echo "COMMIT SOURCE: ${commit_message_check}"
fi
echo "Download link:"
echo "https://github.com/hbyunzai/yelon-builds/archive/${build_tag_name}.zip"
