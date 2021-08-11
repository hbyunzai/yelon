#!/usr/bin/env bash
set -u -e -o pipefail

buildYelonLess() {
  echo 'copy styles...'
  node ${p_build}/copy-less.js
  echo 'fix zorro path...'
  node ${p_build}/fix-zorro-path.js
  echo 'build full css...'
  node ${p_build}/generate-css.js
}

