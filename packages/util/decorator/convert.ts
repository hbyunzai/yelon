import { warn } from '@yelon/util/other';


export type BooleanInput = boolean | string | undefined | null;
export type NumberInput = number | string | undefined | null;

function propDecoratorFactory<T, D>(
  name: string,
  fallback: (v: T, defaultValue: D) => D,
  defaultValue: any
): (target: any, propName: string) => void {
  function propDecorator(
    target: any,
    propName: string,
    originalDescriptor?: TypedPropertyDescriptor<any>
  ): any {
    const privatePropName = `$$__${propName}`;

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
        warn(`The prop "${privatePropName}" is already exist, it will be overrided by ${name} decorator.`);
      }
    }

    Object.defineProperty(target, privatePropName, {
      configurable: true,
      writable: true
    });

    return {
      get(): string {
        return originalDescriptor && originalDescriptor.get
          ? originalDescriptor.get.bind(this)()
          : this[privatePropName];
      },
      set(value: T): void {
        if (originalDescriptor && originalDescriptor.set) {
          originalDescriptor.set.bind(this)(fallback(value, defaultValue));
        }
        this[privatePropName] = fallback(value, defaultValue);
      }
    };
  }

  return propDecorator;
}

export function toBoolean(
  value: unknown,
  defaultValue: boolean | null | undefined = false
): boolean | null | undefined {
  return value == null ? defaultValue : `${value}` !== 'false';
}

/**
 * @deprecated Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed
 * - Use `@Input({ transform: booleanAttribute })` instead of `@InputBoolean()`
 * - Use `@Input({ transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) })` instead of `@InputBoolean(null)`
 *
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * {AT}Input() {AT}InputBoolean() visible: boolean = false;
 * {AT}Input() {AT}InputBoolean(null) visible: boolean = false;
 * ```
 */
export function InputBoolean(defaultValue: boolean | null = false): any {
  return propDecoratorFactory('InputBoolean', toBoolean, defaultValue);
}

export function toNumber(value: unknown): number;
export function toNumber<D>(value: unknown, fallback: D): number | D;
export function toNumber(value: unknown, fallbackValue: number = 0): number {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value)) ? Number(value) : fallbackValue;
}

/**
 * @deprecated Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed
 * - Use `@Input({ transform: numberAttribute })` instead of `@InputNumber()`
 * - Use `@Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) })` instead of `@InputNumber(null)`
 *
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * {AT}Input() {AT}InputNumber() visible: number = 1;
 * {AT}Input() {AT}InputNumber(null) visible: number = 2;
 * ```
 */
export function InputNumber(defaultValue: number | null = 0): any {
  return propDecoratorFactory('InputNumber', toNumber, defaultValue);
}
