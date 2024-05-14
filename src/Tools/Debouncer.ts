export class Debouncer<T extends (...args: any[]) => void> {
  callback: T;
  wait: number;
  private timer: ReturnType<typeof setTimeout> | null = null;
  constructor(callback: T, wait = 200) {
    this.wait = wait;
    this.callback = callback;
  }

  public execute(...args: Parameters<T>) {
    this.clear();
    this.timer = setTimeout(() => {
      this.clear();
      this.callback(...args);
    }, this.wait);
  }

  public clear() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
