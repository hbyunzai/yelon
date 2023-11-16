#!/bin/bash

# set -u -e -o pipefail

readonly thisDir=$(cd $(dirname $0); pwd)

cd $(dirname $0)/../..

DIST="$(pwd)/dist"
ROOT=${DIST}/yelon-builds

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
  rm -rf ${ROOT}
  mkdir -p ${ROOT}
  cd ${DIST}
  echo ">>> Clone yelon & cli dist..."
  git clone --depth 1 https://github.com/hbyunzai/yelon-builds.git
}

publishToMaster() {
  (cd ${ROOT}/@yelon; for p in `ls .`; do cd $p; npm publish; cd ..; done)
  cd ${ROOT}/ng-yunzai
  npm publish
}

publishToNext() {
  (cd ${ROOT}/@yelon; for p in `ls .`; do cd $p; npm publish --tag next; cd ..; done)
  cd ${ROOT}/ng-yunzai
  npm publish --tag next
}

syncNpmMirror() {
  (cd ${ROOT}/@yelon; for p in `ls .`; do curl -X PUT https://registry-direct.npmmirror.com/-/package/@yelon/$p/syncs; done)
  curl -X PUT https://registry-direct.npmmirror.com/-/package/ng-yunzai/syncs
}

clone
if [[ ${NEXT} == true ]]; then
  publishToNext
else
  publishToMaster
fi
syncNpmMirror
