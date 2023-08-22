import { chain, Rule } from '@angular-devkit/schematics';

import { Schema } from './schema';
import { buildYunzai } from '../utils';

export default function (options: Schema): Rule {
  return chain([buildYunzai({ schematicName: 'list', ...options })]);
}
