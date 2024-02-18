import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { DEFAULT_WORKSPACE_PATH, logInfo, readJSON } from '../../../utils';

export function removeForRoot(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const angularJson = readJSON(tree, DEFAULT_WORKSPACE_PATH);
    const projectNames = Object.keys(angularJson.projects);
    for (const name of projectNames) {
      const sourceRoot = angularJson.projects[name].sourceRoot;
      removeYunzaiThemeForRoot(tree, name, sourceRoot, context);
      removeYunzaiThemeForChild(tree, name, sourceRoot, context);
      removeYelonACLModuleForRoot(tree, name, sourceRoot, context);
    }
  };
}

function removeYunzaiThemeForRoot(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const modulePath = `${sourceRoot}/app/global-config.module.ts`;
  if (!tree.exists(modulePath)) return;

  const content = tree.readText(modulePath).replace(/YunzaiThemeModule\.forRoot\(\),?/g, '');
  tree.overwrite(modulePath, content);

  logInfo(context, `Remove YunzaiThemeModule.forRoot in ${name} project`);
}

function removeYunzaiThemeForChild(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const forChild = 'YunzaiThemeModule.forChild()';

  tree.visit((path, entry) => {
    if (!entry || !path.endsWith('.ts') || !path.startsWith(sourceRoot)) return;

    const content = tree.readText(path);
    if (!content.includes(forChild)) return;

    tree.overwrite(path, content.replace(forChild, 'YunzaiThemeModule'));
  });

  logInfo(context, `Remove ${forChild} in ${name} project`);
}

function removeYelonACLModuleForRoot(tree: Tree, name: string, sourceRoot: string, context: SchematicContext): void {
  const modulePath = `${sourceRoot}/app/global-config.module.ts`;
  if (!tree.exists(modulePath)) return;

  const forRoot = 'YelonACLModule.forRoot()';
  const content = tree.readText(modulePath);
  tree.overwrite(modulePath, content.replace(/YelonACLModule\.forRoot\(\),?/g, ''));

  logInfo(context, `Remove ${forRoot} in ${name} project`);
}
