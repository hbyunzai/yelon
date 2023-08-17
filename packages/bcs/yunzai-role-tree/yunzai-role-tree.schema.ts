import { SFSchema } from '@yelon/form';

export const defaultSchema: SFSchema = {
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
