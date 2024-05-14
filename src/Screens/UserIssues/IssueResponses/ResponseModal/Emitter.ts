import { EventEmitter } from "@figliolia/event-emitter";

export const ResponseEmitter = new EventEmitter<{
  scrollToEnd: number;
}>();
