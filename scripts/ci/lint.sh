#!/bin/bash

set -u -e -o pipefail

readonly npm_bin="$(cd $(dirname $0)/../.. | pwd)/node_modules/.bin"

npm run lint:ts
${npm_bin}/stylelint 'packages/**/*.less' --syntax less
