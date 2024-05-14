export class ImmutableDict<K extends string | number, V> {
  private value = {} as Record<K, V>;
  constructor(obj: Record<K, V>) {
    this.value = obj;
  }

  public get(key: K) {
    return this.value[key];
  }

  public set(key: K, callback: (value: V) => V) {
    return new ImmutableDict<K, V>({
      ...this.value,
      [key]: callback(this.value[key]),
    });
  }

  public delete(key: K) {
    const { [key]: _, ...rest } = this.value;
    return new ImmutableDict<K, V>(rest as Record<K, V>);
  }

  public map<U>(callback: (value: V, key: K, index: number) => U) {
    const results: U[] = [];
    let pointer = -1;
    for (const key in this.value) {
      results.push(callback(this.value[key], key, ++pointer));
    }
    return results;
  }

  public iterate(callback: (key: K, value: V) => void) {
    for (const key in this.value) {
      callback(key, this.value[key]);
    }
  }

  public values(): V[] {
    return Object.values(this.value);
  }

  public clone() {
    return new ImmutableDict(this.value);
  }

  public get size() {
    return Object.keys(this.value).length;
  }
}
