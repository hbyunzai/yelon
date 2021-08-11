import { chain, Rule } from '@angular-devkit/schematics';

import { buildYunzai } from '../utils';
import { Schema } from './schema';

export default function (options: Schema): Rule {
  return chain([buildYunzai({ schematicName: 'edit', ...options })]);
}
