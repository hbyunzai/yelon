import { InjectionToken } from '@angular/core';

import type { FullLocaleData } from './locale.types';

export const YELON_LOCALE = new InjectionToken<FullLocaleData>('yelon-locale');
