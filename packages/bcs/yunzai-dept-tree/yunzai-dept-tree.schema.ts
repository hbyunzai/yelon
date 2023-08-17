import { Observable, of } from 'rxjs';

import { SFSchema, SFSchemaEnumType } from '@yelon/form';

export function generateSchema(
  ic: boolean,
  ich: boolean,
  gra: boolean,
  data?: Observable<SFSchemaEnumType[]>
): SFSchema {
  let schema: SFSchema = {
    properties: {
      search: {
        title: 'search',
        type: 'string',
        ui: {
          i18n: 'input.search',
          widget: 'string'
        }
      }
    }
  };
  if (ic) {
    schema.properties = Object.defineProperty(schema.properties, 'includeCLass', {
      value: {
        title: 'includeClass',
        type: 'boolean',
        enum: [
          { label: 'true', value: true },
          { label: 'false', value: false }
        ],
        default: true,
        ui: {
          i18n: 'radio.class',
          widget: 'radio'
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    });
  }
  if (ich) {
    schema.properties = Object.defineProperty(schema.properties, 'includeClassHistory', {
      value: {
        title: 'includeClassHistory',
        type: 'boolean',
        enum: [
          { label: 'true', value: true },
          { label: 'false', value: false }
        ],
        default: true,
        ui: {
          i18n: 'radio.history',
          widget: 'radio'
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    });
  }
  if (gra) {
    schema.properties = Object.defineProperty(schema.properties, 'gradeId', {
      value: {
        title: 'gradeId',
        type: 'string',
        ui: {
          i18n: 'grade',
          widget: 'select',
          asyncData: () => data || of([])
        }
      } as SFSchema,
      configurable: true,
      enumerable: true,
      writable: true
    });
  }
  return schema;
}
