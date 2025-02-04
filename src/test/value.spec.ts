import { Value } from "../lib";

export class TestValue<Type> extends Value<Type> {
  public override get [Symbol.toStringTag]() {
    return 'TestValue';
  }
}

const value = new TestValue('test');

console.log(`tag, `, value.tag);
