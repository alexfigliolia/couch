export class PointerQueue<T> extends Array<T> {
  private pointer = 0;

  public enqueue(...items: T[]) {
    return super.push(...items);
  }

  public dequeue() {
    const item = this[this.pointer];
    this.movePointer();
    return item;
  }

  public peek() {
    return this[this.pointer];
  }

  public get size() {
    return Math.max(this.length - this.pointer, 0);
  }

  private movePointer() {
    if (this.pointer < this.length) {
      this.pointer++;
    }
    if (this.pointer === this.length) {
      this.length = 0;
      this.pointer = 0;
    }
  }
}
