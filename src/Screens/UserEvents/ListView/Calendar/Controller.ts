import { Schedule } from "State/Schedule";
import type { IDay } from "./types";

export class Controller {
  public static createGrid(year: number, month: number) {
    const previousMaxDay = new Date(year, month, 0).getDate();
    const currentMaxDay = new Date(year, month + 1, 0).getDate();
    const firstOfMonth = new Date(year, month, 0).getDay();
    const numRows = Math.ceil((currentMaxDay + (firstOfMonth + 1)) / 7);
    const rows: IDay[][] = [];
    let monthDay = 0;
    let nextMonthDay = 0;
    for (let i = 0; i < numRows; i++) {
      let current = 0;
      const row: IDay[] = [];
      if (i === 0) {
        for (let j = 0; j <= firstOfMonth; j++) {
          current++;
          const day = previousMaxDay - (firstOfMonth - j);
          row.push({
            fade: true,
            day,
            events: Schedule.hasEvents(month - 1, day),
          });
        }
      }
      for (let j = 0; j < 7 - current; j++) {
        if (++monthDay > currentMaxDay) {
          row.push({
            fade: true,
            day: ++nextMonthDay,
            events: Schedule.hasEvents(month + 1, nextMonthDay),
          });
        } else {
          row.push({
            day: monthDay,
            events: Schedule.hasEvents(month, monthDay),
          });
        }
      }
      rows.push(row);
    }
    return rows;
  }
}
