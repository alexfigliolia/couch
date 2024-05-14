import { PointerQueue } from "Generics/PointerQueue";

export class FrameSequencer extends PointerQueue<() => void> {
  constructor(...fns: (() => void)[]) {
    super();
    super.enqueue(...fns);
  }

  public executeAll() {
    return new Promise<void>((resolve, reject) => {
      requestAnimationFrame(() => {
        const fn = super.dequeue();
        if (!fn) {
          return reject(`"${fn as unknown as string}" is not a function`);
        }
        void fn();
        if (this.peek()) {
          return requestAnimationFrame(fn);
        }
        resolve();
      });
    });
  }
}
