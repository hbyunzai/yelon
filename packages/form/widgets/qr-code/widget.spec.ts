import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync } from '@angular/core/testing';

import { SFSchema } from '@yelon/form';
import { createTestContext } from '@yelon/testing';

import { configureSFTestSuite, SFPage, TestFormComponent } from '../../spec/base.spec';
import { SFQrCodeWidgetSchema, withQrCodeWidget } from './index';

describe('form: widget: qr-code', () => {
  let fixture: ComponentFixture<TestFormComponent>;
  let dl: DebugElement;
  let context: TestFormComponent;
  let page: SFPage;

  configureSFTestSuite({ widgets: [withQrCodeWidget()] });

  beforeEach(() => {
    ({ fixture, dl, context } = createTestContext(TestFormComponent));
    page = new SFPage(context.comp);
    page.cleanOverlay().prop(dl, context, fixture);
  });

  it('should be working', fakeAsync(() => {
    const s: SFSchema = {
      properties: {
        a: {
          type: 'string',
          ui: {
            widget: 'qr-code'
          } as SFQrCodeWidgetSchema
        }
      }
    };
    page.newSchema(s).getEl('canvas');
  }));
});
