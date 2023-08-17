import { SFSchema } from '@yelon/form';

export const defaultSchema: SFSchema = {
  properties: {
    search: {
      title: 'name',
      type: 'string',
      ui: {
        i18n: 'input.name',
        widget: 'string'
      }
    }
  }
};
