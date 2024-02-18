import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { insertImport, addSymbolToNgModuleMetadata } from '@schematics/angular/utility/ast-utils';
import { Change, InsertChange } from '@schematics/angular/utility/change';

import { DEFAULT_WORKSPACE_PATH, getSourceFile, readJSON, applyChanges, logWarn, logEx } from '../../../utils';

export function autoRegisterFormWidgets(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      autoRegisterFormWidgetsRun(tree, name, angularJson.projects[name].sourceRoot, context);
    }
  };
}

function autoRegisterFormWidgetsRun(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const modulePath = `${sourceRoot}/app/shared/json-schema/json-schema.module.ts`;
  if (!tree.exists(modulePath)) return;

  const list = [
    { symbolName: 'AutoCompleteWidgetModule', fileName: '@yelon/form/widgets/autocomplete' },
    { symbolName: 'CascaderWidgetModule', fileName: '@yelon/form/widgets/cascader' },
    { symbolName: 'MentionWidgetModule', fileName: '@yelon/form/widgets/mention' },
    { symbolName: 'RateWidgetModule', fileName: '@yelon/form/widgets/rate' },
    { symbolName: 'SliderWidgetModule', fileName: '@yelon/form/widgets/slider' },
    { symbolName: 'TagWidgetModule', fileName: '@yelon/form/widgets/tag' },
    { symbolName: 'TimeWidgetModule', fileName: '@yelon/form/widgets/time' },
    { symbolName: 'TransferWidgetModule', fileName: '@yelon/form/widgets/transfer' },
    { symbolName: 'TreeSelectWidgetModule', fileName: '@yelon/form/widgets/tree-select' },
    { symbolName: 'UploadWidgetModule', fileName: '@yelon/form/widgets/upload' }
  ];
  try {
    const source = getSourceFile(tree, modulePath);
    const changes: Change[] = [];
    for (const item of list) {
      changes.push(insertImport(source, modulePath, item.symbolName, item.fileName) as InsertChange);
      changes.push(...addSymbolToNgModuleMetadata(source, modulePath, 'imports', item.symbolName));
    }
    applyChanges(tree, modulePath, changes);

    logWarn(
      context,
      `[@yelon/form] Register all widgets in ${name} project, you can reduce package size by removing unnecessary parts in ${modulePath}`
    );
  } catch (ex) {
    logEx(
      context,
      `Import all @yelon/form/widgets/* errors, need to manually import the required modules. ERROR: ${ex.message}`
    );
  }
}
