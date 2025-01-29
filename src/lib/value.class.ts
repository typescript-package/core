/**
 * @description The class to manage the value of generic type variable `Type`.
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
   * Creates an instance of child class.
   * @constructor
   * @param {Type} value The value of generic type variable `Type`.
   */
  constructor(value: Type) {
    this.#value = value;
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
