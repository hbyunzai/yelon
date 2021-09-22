#!/usr/bin/env bash
set -u -e -o pipefail

p_tsc=${p_project}/node_modules/.bin/tsc
p_jasmine=${p_project}/node_modules/.bin/jasmine
p_tsconfig=${p_schematics}/tsconfig.json

copyFiles() {
    readonly files=(
        # i18n data
        "${1}src/assets/tmp/i18n|${2}application/files/i18n"
        # code styles
        "${1}.eslintignore|${2}application/files/root/"
        "${1}.eslintrc.js|${2}application/files/root/.eslintrc.js"
        "${1}.prettierignore|${2}application/files/root/.prettierignore"
        "${1}.prettierrc.js|${2}application/files/root/.prettierrc.js"
        "${1}.stylelintrc|${2}application/files/root/.stylelintrc"
        "${1}.nvmrc|${2}application/files/root"
        "${1}proxy.conf.json|${2}application/files/root"
        "${1}.husky|${2}application/files/root/.husky"
        # ng-yunzai.json
        "${1}ng-yunzai.json|${2}application/files/root/"
        # LICENSE
        "${1}LICENSE|${2}application/files/root"
        "${1}README.md|${2}application/files/root"
        "${1}README-zh_CN.md|${2}application/files/root"
        # mock
        "${1}_mock/_user.ts|${2}application/files/root/_mock/"
        # src
        "${1}src/favicon.ico|${2}application/files/src/"
        "${1}src/typings.d.ts|${2}application/files/src/"
        "${1}src/environments|${2}application/files/src/"
        "${1}src/styles|${2}application/files/src/"
        "${1}src/main.ts|${2}application/files/src/"
        "${1}src/test.ts|${2}application/files/src/"
        "${1}src/styles.less|${2}application/files/src/"
        "${1}src/style-icons-auto.ts|${2}application/files/src/"
        "${1}src/style-icons.ts|${2}application/files/src/"
        # assets
        "${1}src/assets/color.less|${2}application/files/src/assets/"
        "${1}src/assets/style.compact.css|${2}application/files/src/assets/"
        "${1}src/assets/style.dark.css|${2}application/files/src/assets/"
        "${1}src/assets/*.svg|${2}application/files/src/assets/"
        "${1}src/assets/tmp/img/avatar.jpg|${2}application/files/src/assets/tmp/img/"
        "${1}src/assets/tmp/img/message.svg|${2}application/files/src/assets/tmp/img/"
        "${1}src/assets/tmp/img/notice.svg|${2}application/files/src/assets/tmp/img/"
        "${1}src/assets/tmp/img/todo.svg|${2}application/files/src/assets/tmp/img/"
        "${1}src/assets/tmp/img/message.png|${2}application/files/src/assets/tmp/img/"
        "${1}src/assets/tmp/img/todo.png|${2}application/files/src/assets/tmp/img/"
        "${1}src/assets/tmp/i18n/*|${2}application/files/src/assets/tmp/i18n/"
        "${1}src/assets/tmp/app-data.json|${2}application/files/src/assets/tmp/"
        # core
        "${1}src/app/core/i18n|${2}application/files/src/app/core/"
        "${1}src/app/core/net|${2}application/files/src/app/core/"
        "${1}src/app/core/module-import-guard.ts|${2}application/files/src/app/core/"
        "${1}src/app/core/README.md|${2}application/files/src/app/core/"
        # shared
        "${1}src/app/shared/utils/*|${2}application/files/src/app/shared/utils/"
        "${1}src/app/shared/json-schema/*|${2}application/files/src/app/shared/json-schema/"
        "${1}src/app/shared/st-widget/*|${2}application/files/src/app/shared/st-widget/"
#        "${1}src/app/shared/index.ts|${2}application/files/src/app/shared/"
        # app.component
        "${1}src/app/global-config.module.ts|${2}application/files/src/app/"
        "${1}src/app/app.component.ts|${2}application/files/src/app/"
        # layout
        "${1}src/app/layout/blank|${2}application/files/src/app/layout/"
        "${1}src/app/layout/passport/passport.component.less|${2}application/files/src/app/layout/passport/"
        "${1}src/app/layout/passport/passport.component.ts|${2}application/files/src/app/layout/passport/"
        "${1}src/app/layout/basic/README.md|${2}application/files/src/app/layout/basic/"
        "${1}src/app/layout/basic/widgets/i18n.component.ts|${2}application/files/src/app/layout/basic/widgets/"
        "${1}src/app/layout/basic/widgets/search.component.ts|${2}application/files/src/app/layout/basic/widgets/"
        "${1}src/app/layout/basic/widgets/user.component.ts|${2}application/files/src/app/layout/basic/widgets/"
        "${1}src/app/layout/basic/widgets/clear-storage.component.ts|${2}application/files/src/app/layout/basic/widgets/"
        "${1}src/app/layout/basic/widgets/fullscreen.component.ts|${2}application/files/src/app/layout/basic/widgets/"
        # router
        "${1}src/app/routes/exception|${2}application/files/src/app/routes/"
        "${1}src/app/routes/passport|${2}application/files/src/app/routes/"
        # plugin
        "${1}src/app/layout/basic/widgets/rtl.component.ts|${2}plugin/files/rtl/layout/basic/widgets/"
    )

    local from to
    for file in ${files[@]}; do
        IFS=$'|' read -r from to <<<"${file}"
        # dir
        if [[ ${to:(-1):1} == '/' ]]; then
            mkdir -p ${to}
        fi
        # use length -2('/' and '*') to remove /*
        local fromLen=${#from}-2
        if [[ ${from:(-2):2} == '/*' ]]; then
            if [[ ! -d "${from:0:fromLen}" ]]; then
                echo "未找到 ${from:0:fromLen} 目录"
                continue
            fi
        fi
        if [[ ${from} != '' ]]; then
            cp -fr $from $to
        fi
    done

    # remove passport-routing & passport.module.ts
    rm ${2}application/files/src/app/routes/passport/passport-routing.module.ts
    rm ${2}application/files/src/app/routes/passport/passport.module.ts
}

buildSchematics() {
    rm -rf ${p_schematics_dist}
    echo "Building...${p_tsconfig}"
    ${p_tsc} -p ${p_tsconfig}
    rsync -am --include="*.json" --include="*/" --exclude=* ${p_schematics}/ ${p_schematics_dist}/
    rsync -am --include="*.d.ts" --include="*/" --exclude=* ${p_schematics}/ ${p_schematics_dist}/
    rsync -am --include="/files" ${p_schematics}/ ${p_schematics_dist}/
    rm ${p_schematics_dist}/test.ts ${p_schematics_dist}/tsconfig.json ${p_schematics_dist}/tsconfig.spec.json
    copyFiles "${p_scaffold}/" "${p_schematics_dist}/"
    cp ${p_schematics}/README.md ${p_schematics_dist}/README.md
    cp ${p_schematics}/.npmignore ${p_schematics_dist}/.npmignore
    cp ./LICENSE ${p_schematics_dist}/LICENSE
    updateVersionReferences ${p_schematics_dist}
}
