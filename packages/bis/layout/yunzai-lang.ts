import ngElGr from '@angular/common/locales/el';
import ngEn from '@angular/common/locales/en';
import ngEsEs from '@angular/common/locales/es';
import ngFr from '@angular/common/locales/fr';
import ngHr from '@angular/common/locales/hr';
import ngIt from '@angular/common/locales/it';
import ngKo from '@angular/common/locales/ko';
import ngPl from '@angular/common/locales/pl';
import ngSl from '@angular/common/locales/sl';
import ngTr from '@angular/common/locales/tr';
import ngZh from '@angular/common/locales/zh';
import ngZhTw from '@angular/common/locales/zh-Hant';

import {
  enUS as dfEn,
  zhCN as dfZhCn,
  zhTW as dfZhTw,
  el as dfEl,
  es as dfEs,
  fr as dfFr,
  hr as dfHr,
  it as dfIt,
  ko as dfKo,
  pl as dfPl,
  sl as dfSl,
  tr as dfTr
} from 'date-fns/locale';

import {
  el_GR as yelonElGR,
  en_US as yelonEnUS,
  es_ES as yelonEsES,
  fr_FR as yelonFrFR,
  hr_HR as yelonHrHR,
  it_IT as yelonItIT,
  ko_KR as yelonKoKR,
  pl_PL as yelonPlPL,
  sl_SI as yelonSlSI,
  tr_TR as yelonTrTR,
  zh_CN as yelonZhCn,
  zh_TW as yelonZhTw
} from '@yelon/theme';
import {
  el_GR as zorroElGR,
  en_US as zorroEnUS,
  es_ES as zorroEsES,
  fr_FR as zorroFrFR,
  hr_HR as zorroHrHR,
  it_IT as zorroItIT,
  ko_KR as zorroKoKR,
  pl_PL as zorroPlPL,
  sl_SI as zorroSlSI,
  tr_TR as zorroTrTR,
  zh_CN as zorroZhCN,
  zh_TW as zorroZhTW
} from 'ng-zorro-antd/i18n';

export interface LangConfigData {
  abbr: string;
  text: string;
  ng: any;
  zorro: any;
  date: any;
  yelon: any;
}

export const YUNZAI_LANGS: { [key: string]: LangConfigData } = {
  'zh-CN': {
    text: '简体中文',
    ng: ngZh,
    zorro: zorroZhCN,
    date: dfZhCn,
    yelon: yelonZhCn,
    abbr: '🇨🇳'
  },
  'zh-TW': {
    text: '繁体中文',
    ng: ngZhTw,
    zorro: zorroZhTW,
    date: dfZhTw,
    yelon: yelonZhTw,
    abbr: '🇭🇰'
  },
  'en-US': {
    text: 'English',
    ng: ngEn,
    zorro: zorroEnUS,
    date: dfEn,
    yelon: yelonEnUS,
    abbr: '🇬🇧'
  },
  'el-GR': {
    text: 'Ελληνικά',
    ng: ngElGr,
    zorro: zorroElGR,
    date: dfEl,
    yelon: yelonElGR,
    abbr: '🇬🇷'
  },
  'es-ES': {
    text: 'Español',
    ng: ngEsEs,
    zorro: zorroEsES,
    date: dfEs,
    yelon: yelonEsES,
    abbr: '🇪🇸'
  },
  'fr-FR': {
    text: 'Français',
    ng: ngFr,
    zorro: zorroFrFR,
    date: dfFr,
    yelon: yelonFrFR,
    abbr: '🇫🇷'
  },
  'hr-HR': {
    text: 'Hrvatski',
    ng: ngHr,
    zorro: zorroHrHR,
    date: dfHr,
    yelon: yelonHrHR,
    abbr: '🇭🇷'
  },
  'it-IT': {
    text: 'Italiano',
    ng: ngIt,
    zorro: zorroItIT,
    date: dfIt,
    yelon: yelonItIT,
    abbr: '🇮🇹'
  },
  'ko-KR': {
    text: '한국어',
    ng: ngKo,
    zorro: zorroKoKR,
    date: dfKo,
    yelon: yelonKoKR,
    abbr: '🇰🇷'
  },
  'pl-PL': {
    text: 'Polski',
    ng: ngPl,
    zorro: zorroPlPL,
    date: dfPl,
    yelon: yelonPlPL,
    abbr: '🇵🇱'
  },
  'sl-SI': {
    text: 'Slovenščina',
    ng: ngSl,
    zorro: zorroSlSI,
    date: dfSl,
    yelon: yelonSlSI,
    abbr: '🇸🇮'
  },
  'tr-TR': {
    text: 'Türkçe',
    ng: ngTr,
    zorro: zorroTrTR,
    date: dfTr,
    yelon: yelonTrTR,
    abbr: '🇹🇷'
  }
};
