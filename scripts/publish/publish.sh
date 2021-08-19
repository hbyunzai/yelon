#!/usr/bin/env bash

readonly p_project=$(cd $(dirname $0)/../.. | pwd)
readonly p_scaffold=${p_project}/ng-yunzai
readonly p_packages=${p_project}/packages
readonly p_schematics=${p_project}/schematics
readonly p_scripts=${p_project}/scripts
readonly p_build=${p_scripts}/build
readonly p_ci=${p_scripts}/ci
readonly p_src=${p_project}/src
readonly p_dist=${p_project}/dist
readonly p_yelon_builds=${p_dist}/yelon-builds
readonly p_packages_dist=${p_project}/dist/@yelon
readonly p_schematics_dist=${p_project}/dist/ng-yunzai

NEXT=false
for ARG in "$@"; do
    case "$ARG" in
    -next)
        NEXT=true
        ;;
    esac
done

VERSION=$(node -p "require('./package.json').version")
echo "Version ${VERSION}"

clone() {
    rm -rf ${p_yelon_builds}
    mkdir -p ${p_yelon_builds}
    echo ">>> Clone yelon & cli dist..."
    git clone --depth 1 https://github.com/hbyunzai/yelon-builds.git ${p_yelon_builds}
}

publishToMaster() {
    for package in $(ls ${p_packages_dist}); do
        npm publish ${p_packages_dist}/${package} --access public
    done
    npm publish ${p_schematics_dist} --access public
}

publishToNext() {
    for package in $(ls ${p_packages_dist}); do
        npm publish ${p_packages_dist}/${package} --access public --tag next
    done
    npm publish ${p_schematics_dist} --access public --tag next
}

syncTaobao() {
    for package in $(ls ${p_packages_dist}); do
        curl -X PUT https://npm.taobao.org/sync/@yelon/${package}?sync_upstream=true
    done
    curl -X PUT https://npm.taobao.org/sync/ng-yunzai?sync_upstream=true
}

clone

if [[ ${NEXT} == true ]]; then
    publishToNext
else
    publishToMaster
fi
syncTaobao
