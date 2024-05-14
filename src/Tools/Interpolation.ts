export class Interpolation<T extends string | number> {
  outputRange: T[];
  inputRange: number[];
  constructor(...range: T[]) {
    this.outputRange = range;
    this.inputRange = range.map((_, i) => i);
  }

  public add(range: T) {
    this.outputRange.push(range);
    this.inputRange.push(this.inputRange.length);
  }

  public immutableAdd(range: T) {
    return new Interpolation(...this.outputRange, range);
  }

  public get nextValue() {
    return this.inputRange[this.inputRange.length - 1];
  }
}
