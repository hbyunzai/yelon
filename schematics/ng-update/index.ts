import { createMigrationSchematicRule, NullableDevkitMigration, TargetVersion } from '@angular/cdk/schematics';

import { chain, Rule, SchematicContext } from '@angular-devkit/schematics';

import { ruleUpgradeData } from './upgrade-data';
import { v19Rule } from './upgrade-rules/V19';

const migrations: NullableDevkitMigration[] = [];

export function updateToV19(): Rule {
  return chain([v19Rule(), createMigrationSchematicRule(TargetVersion.V19, migrations, ruleUpgradeData, postUpdate)]);
}

/** Post-update schematic to be called when update is finished. */
export function postUpdate(context: SchematicContext, targetVersion: TargetVersion, hasFailures: boolean): void {
  context.logger.info('');
  context.logger.info(`✓  Updated NG-YUNZAI to ${targetVersion}`);
  context.logger.info('');

  if (hasFailures) {
    context.logger.warn(
      '  ⚠  Some issues were detected but could not be fixed automatically. Please check the ' +
        'output above and fix these issues manually.'
    );
  }
}
