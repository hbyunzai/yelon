#!/usr/bin/env bash

set -u -e -o pipefail

packages=(
  util
  testing
  acl
  theme
  abc
  auth
  cache
  chart
  mock
  form
  bis
)

addBanners() {
  license_banner=${p_packages}/license-banner.txt
  for file in ${1}/*; do
    if [[ -f ${file} && "${file##*.}" != "map" ]]; then
      cat ${license_banner} >${file}.tmp
      cat ${file} >>${file}.tmp
      mv ${file}.tmp ${file}
    fi
  done
}

copyYelonSchemas() {
  cp ${p_packages}/abc/onboarding/schema.json ${p_packages_dist}/abc/onboarding/schema.json
}

buildYelon() {
  for package_name in ${packages[@]}; do
    node --max_old_space_size=4096 ${p_build}/packing.js ${package_name}
    addBanners ${p_packages_dist}/${package_name}/bundles
    cp ${p_project}/LICENSE ${p_packages_dist}/${package_name}/LICENSE
  done
  updateVersionReferences ${p_packages_dist}
  copyYelonSchemas
}
