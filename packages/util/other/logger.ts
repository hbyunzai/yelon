declare const ngDevMode: boolean;

const record: Record<string, boolean> = {};

export const PREFIX = '[@YELON]:';

function notRecorded(...args: any[]): boolean {
  const asRecord = args.reduce((acc, c) => acc + c.toString(), '');

  if (record[asRecord]) {
    return false;
  } else {
    record[asRecord] = true;
    return true;
  }
}

function consoleCommonBehavior(consoleFunc: (...args: any) => void, ...args: any[]): void {
  if ((typeof ngDevMode === 'undefined' || ngDevMode) && notRecorded(...args)) {
    consoleFunc(...args);
  }
}

// Warning should only be printed in dev mode and only once.
export const warn = (...args: any[]): void =>
  consoleCommonBehavior((...arg: any[]) => console.warn(PREFIX, ...arg), ...args);

export const warnDeprecation = (...args: any[]): any => {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    return () => {};
  }
  const stack = new Error().stack;
  return consoleCommonBehavior((...arg: any[]) => console.warn(PREFIX, 'deprecated:', ...arg, stack), ...args);
};

// Log should only be printed in dev mode.
export const log = (...args: any[]): void => {
  if (typeof ngDevMode === 'undefined' || ngDevMode) {
    console.log(PREFIX, ...args);
  }
};
