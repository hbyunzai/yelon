/* eslint-disable @typescript-eslint/no-deprecated */
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of, throwError } from 'rxjs';

import fs from 'file-saver';

import { LazyService } from '@yelon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { ZipService } from './zip.service';

let isErrorRequest = false;
let isClassZIP = false;
let isErrorGenZip = false;
class JSZip {
  file(): void {}
  generateAsync(): Promise<void> {
    return isErrorGenZip ? Promise.reject('') : Promise.resolve();
  }
}
class MockLazyService {
  load(): Promise<void> {
    (window as NzSafeAny).JSZip = isClassZIP ? JSZip : DEFAULTMOCKJSZIP;
    return Promise.resolve();
  }
}

const DEFAULTMOCKJSZIP = {
  loadAsync: () => {
    return Promise.resolve();
  },
  write: () => {}
};

class MockHttpClient {
  request(): Observable<null> {
    return isErrorRequest ? throwError(() => null) : of(null);
  }
}

describe('abc: zip', () => {
  let srv: ZipService;
  function genModule(): void {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: LazyService, useClass: MockLazyService }
      ]
    });
    srv = TestBed.inject<ZipService>(ZipService);
  }

  beforeEach(() => {
    isErrorRequest = false;
    isClassZIP = false;
    isErrorGenZip = false;
  });

  describe('#read', () => {
    it('should be load zip via url', (done: () => void) => {
      genModule();
      srv.read('/1.zip').then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        }
      );
    });

    it('should be reject when request error via url', (done: () => void) => {
      isErrorRequest = true;
      genModule();
      srv.read('/1.zip').then(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(true).toBe(true);
          done();
        }
      );
    });

    it('should be load zip via file object', (done: () => void) => {
      genModule();
      srv.read(new File([], '1.zip')).then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        }
      );
    });
  });

  describe('#create', () => {
    it('should be working', () => {
      isClassZIP = true;
      genModule();
      srv.create().then(res => expect(res == null).toBe(false));
    });

    it('should be error', () => {
      genModule();
      const lazySrv = TestBed.inject<LazyService>(LazyService);
      spyOn(lazySrv, 'load').and.returnValue(Promise.reject());
      srv.create().then(res => expect(res == null).toBe(true));
    });
  });

  describe('#pushUrl', () => {
    let zip: NzSafeAny;
    beforeEach((done: () => void) => {
      isClassZIP = true;
      genModule();
      srv.create().then(res => {
        zip = res;
        done();
      });
    });
    it('should be save zip file', (done: () => void) => {
      srv.pushUrl(zip, '1.zip', '1.zip').then(
        () => {
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        }
      );
    });
    it('should be reject when bad request', (done: () => void) => {
      isErrorRequest = true;
      srv.pushUrl(zip, '1.zip', '1.zip').then(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(true).toBe(true);
          done();
        }
      );
    });
  });

  describe('#save', () => {
    let zip: NzSafeAny;
    beforeEach((done: () => void) => {
      isClassZIP = true;
      genModule();
      srv.create().then(res => {
        zip = res;
        done();
      });
    });
    it('should be save zip file', (done: () => void) => {
      spyOn(fs, 'saveAs');
      srv.save(zip, { filename: '123.zip' }).then(
        () => {
          expect(fs.saveAs).toHaveBeenCalled();
          expect(true).toBe(true);
          done();
        },
        () => {
          expect(false).toBe(true);
          done();
        }
      );
    });
    it('should be call callback', (done: () => void) => {
      spyOn(fs, 'saveAs');
      let count = 0;
      srv
        .save(zip, {
          callback: () => ++count
        })
        .then(
          () => {
            expect(count).toBe(1);
            expect(fs.saveAs).toHaveBeenCalled();
            done();
          },
          () => {
            expect(false).toBe(true);
            done();
          }
        );
    });
    it('should be reject when generateAsync return error', (done: () => void) => {
      isErrorGenZip = true;
      spyOn(fs, 'saveAs');
      srv.save(zip).then(
        () => {
          expect(false).toBe(true);
          done();
        },
        () => {
          expect(fs.saveAs).not.toHaveBeenCalled();
          expect(true).toBe(true);
          done();
        }
      );
    });
    it('should be throw error when invalid zip', () => {
      zip = null;
      expect(() => {
        srv.save(zip);
      }).toThrowError();
    });
  });
});
