import { Inject, Injectable, NgZone } from '@angular/core';

import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { YunzaiConfigService, YunzaiSFConfig } from '@yelon/util/config';
import { REGEX } from '@yelon/util/format';

import { mergeConfig } from './config';
import { ErrorData } from './errors';
import { SFValue } from './interface';
import { SFSchema } from './schema';

@Injectable()
export abstract class SchemaValidatorFactory {
  abstract createValidatorFn(
    schema: SFSchema,
    extraOptions: { ignoreKeywords: string[]; debug: boolean }
  ): (value: SFValue) => ErrorData[];
}

@Injectable()
export class AjvSchemaValidatorFactory extends SchemaValidatorFactory {
  protected ajv!: Ajv;
  protected options!: YunzaiSFConfig;

  constructor(@Inject(YunzaiConfigService) cogSrv: YunzaiConfigService, private ngZone: NgZone) {
    super();
    if (!(typeof document === 'object' && !!document)) {
      return;
    }
    this.options = mergeConfig(cogSrv);
    const customOptions = this.options.ajv || {};
    this.ngZone.runOutsideAngular(() => {
      this.ajv = new Ajv({
        allErrors: true,
        loopEnum: 50,
        ...customOptions,
        formats: {
          'data-url': /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/,
          color: REGEX.color,
          mobile: REGEX.mobile,
          'id-card': REGEX.idCard,
          ...customOptions.formats
        }
      });
      addFormats(this.ajv as NzSafeAny);
    });
  }

  createValidatorFn(
    schema: SFSchema,
    extraOptions: { ignoreKeywords: string[]; debug: boolean }
  ): (value: SFValue) => ErrorData[] {
    const ignoreKeywords: string[] = [
      ...(this.options.ignoreKeywords as string[]),
      ...((extraOptions.ignoreKeywords as string[]) || [])
    ];

    return (value: SFValue): ErrorData[] => {
      try {
        this.ngZone.runOutsideAngular(() => this.ajv.validate(schema, value));
      } catch (e) {
        // swallow errors thrown in ajv due to invalid schemas, these
        // still get displayed
        if (extraOptions.debug) {
          console.warn(e);
        }
      }
      let errors = this.ajv.errors;
      if (this.options && ignoreKeywords && errors) {
        errors = errors.filter(w => ignoreKeywords.indexOf(w.keyword) === -1);
      }
      return errors as ErrorData[];
    };
  }
}
