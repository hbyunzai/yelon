#!/bin/bash

set -e

readonly thisDir=$(cd $(dirname $0); pwd)

TRAVIS=false
for ARG in "$@"; do
  case "$ARG" in
    -travis)
      TRAVIS=true
      ;;
  esac
done

cd $(dirname $0)/../..

DIST="$(pwd)/dist"

cloneScaffold() {
  if [[ ! -d ng-yunzai ]]; then
    echo ">>> Not found scaffold source files, must be clone ng-yunzai ..."
    git clone --depth 1 https://github.com/hbyunzai/ng-yunzai.git
  else
    echo ">>> Found scaffold source files"
  fi
}

buildYelon() {
  ./scripts/ci/build-yelon.sh
}

buildSchematies() {
  ./scripts/ci/build-schematics.sh -b -copy -clone
}

cloneScaffold
buildYelon
buildSchematies
