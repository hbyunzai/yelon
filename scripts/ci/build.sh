#!/usr/bin/env bash

set -u -e -o pipefail

# vars
readonly p_project=$(cd $(dirname $0)/../.. | pwd)
readonly p_scaffold=${p_project}/ng-yunzai
readonly p_packages=${p_project}/packages
readonly p_schematics=${p_project}/schematics
readonly p_scripts=${p_project}/scripts
readonly p_build=${p_scripts}/build
readonly p_ci=${p_scripts}/ci
readonly p_src=${p_project}/src
readonly p_license=${p_project}/LICENSE
readonly p_packages_dist=${p_project}/dist/@yelon
readonly p_schematics_dist=${p_project}/dist/ng-yunzai

# all function
source ${p_ci}/util.sh
source ${p_ci}/build-yelon.sh
source ${p_ci}/build-less.sh
source ${p_ci}/build-schematics.sh

# options
BUILD_PACKAGES=false
BUILD_SCHEMATICS=false
BUILD_LESS=false
CLONE_SCAFFOLD=false
TEST_CLI=false
INTEGRATION=false
# format options
for ARG in "$@"; do
  case "$ARG" in
  -packages)
    BUILD_PACKAGES=true
    ;;
  -schematics)
    BUILD_SCHEMATICS=true
    ;;
  -less)
    BUILD_LESS=true
    ;;
  -scaffold)
    CLONE_SCAFFOLD=true
    ;;
  esac
done

# builds
if [[ ${CLONE_SCAFFOLD} == true ]]; then
  cloneScaffold
fi

if [[ ${BUILD_PACKAGES} == true ]]; then
  buildYelon
fi

if [[ ${BUILD_LESS} == true ]]; then
  buildYelonLess
fi

if [[ ${BUILD_SCHEMATICS} == true ]]; then
  buildSchematics
fi
