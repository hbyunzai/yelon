import { YunzaiQRConfig } from '@yelon/util/config';

export const QR_DEFULAT_CONFIG: YunzaiQRConfig = {
  lib: `https://cdn.jsdelivr.net/npm/qrious/dist/qrious.min.js`,
  background: 'white',
  backgroundAlpha: 1,
  foreground: 'black',
  foregroundAlpha: 1,
  level: 'L',
  mime: 'image/png',
  padding: 10,
  size: 220,
  delay: 0
};
