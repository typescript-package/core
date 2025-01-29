/**
 * @description 
 * @export
 * @abstract
 * @class Value
 * @template Type 
 */
export abstract class Value<Type> {
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
   * Creates an instance of `Value`.
   * @constructor
   * @param {Type} value 
   */
  constructor(value: Type) {
    this.#value = value;
  }
}