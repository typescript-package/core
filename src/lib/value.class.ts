/**
 * @description The class to manage the value of generic type variable `Type`.
 * @export
 * @abstract
 * @class Value
 * @template Type 
 */
export abstract class Value<Type> {
  /**
   * @description Returns the `string` tag representation of the `Value` class when used in `Object.prototype.toString.call(instance)`.
   * @public
   * @readonly
   * @type {string}
   */
  public get [Symbol.toStringTag]() {
    return 'Value';
  }

  /**
   * @description Returns the privately stored value of generic type variable `Type`.
   * @public
   * @readonly
   * @type {Type}
   */
  public get value() {
    return this.#value;
  }

  
  /**
   * @description Privately stored value of generic type variable `Type`.
   * @type {Type}
   */
  #value: Type;

  /**
   * Creates an instance of child class.
   * @constructor
   * @param {Type} value The value of generic type variable `Type`.
   */
  constructor(value: Type) {
    this.#value = value;
  }

  /**
   * @description Extracts the string tag of the current instance defined by the `Symbol.toStringTag`.
   * @public
   * @returns {string | undefined} The extracted class name, such as `'Value'`, or `undefined` if extraction fails.
   */
  public get tag(): string | undefined {
    const tag = Object.prototype.toString.call(this).slice(8, -1);
    return tag !== 'Object' ? tag : undefined;
  }

  /**
   * @description Sets the value of generic type variable `Type`.
   * @protected
   * @returns {this} 
   */
  protected setValue(value: Type) {
    this.#value = value;
    return this;
  }
}
