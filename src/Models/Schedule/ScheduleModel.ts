import { State } from "@figliolia/galena";
import { Dates } from "Tools/Dates";
import type { IEvent, ISchedule } from "./types";

export class ScheduleModel extends State<ISchedule> {
  constructor() {
    super("Schedule", {
      activeEvents: [],
      activeDate: new Date(),
      datePicker: false,
      schedules: ScheduleModel.createSchedules(),
    });
    this.setEvents(new Date().getMonth());
  }

  public togglePicker() {
    this.update(state => {
      state.datePicker = !state.datePicker;
    });
  }

  public selectMonth(year: number, month: number) {
    const { schedules } = this.getState();
    const { events } = schedules?.[month] || {};
    for (const key in events) {
      return this.activateDate(new Date(year, month, parseInt(key)));
    }
    return this.update(state => {
      state.activeDate = new Date(year, month, 1);
      state.activeEvents = [];
    });
  }

  public activateDate(date: Date) {
    const month = date.getMonth();
    const day = date.getDate();
    this.update(state => {
      state.activeDate = date;
      state.activeEvents = state.schedules?.[month]?.events?.[day] ?? [];
    });
  }

  public matchDate(year: number, month: number, day: number) {
    const { activeDate } = this.getState();
    return (
      activeDate.getFullYear() === year &&
      activeDate.getMonth() === month &&
      activeDate.getDate() === day
    );
  }

  public hasEvents(month: number, day: number) {
    return !!this.events(month, day).length;
  }

  public events(month: number, day: number) {
    return this.getState().schedules?.[month]?.events?.[day] || [];
  }

  public setEvents(month: number, day?: number) {
    let events: IEvent[];
    let date: Date;
    const today =
      month === new Date().getMonth() ? new Date().getDate() : -Infinity;
    if (typeof day === "undefined") {
      [events, date] = this.findFirstDaysEvents(month, today);
    } else {
      events = this.events(month, day);
      date = new Date(this.getState().schedules[month].year, month, day);
    }
    this.update(state => {
      state.activeDate = date;
      state.activeEvents = events;
    });
  }

  public findFirstDaysEvents(
    month: number,
    min = -Infinity,
  ): [events: IEvent[], date: Date] {
    let scopedEvents: IEvent[] = [];
    let date = new Date();
    const { events, year } = this.getState().schedules[month];
    for (const key in events) {
      if (events[key].length) {
        const day = parseInt(key);
        scopedEvents = events[key];
        date = new Date(year, month, day);
        if (day > min) {
          return [scopedEvents, date];
        }
      }
    }
    return [scopedEvents, date];
  }

  public activeYearAndMonth(): [Date, number, number] {
    const { activeDate } = this.getState();
    return [activeDate, activeDate.getFullYear(), activeDate.getMonth()];
  }

  private static createSchedules() {
    const today = new Date();
    const thisYear = today.getFullYear();
    return Dates.months.map((_, i) => {
      const random = new Array(3).fill(0);
      const events: Record<number, IEvent[]> = {};
      for (const _ of random) {
        const maxDay = new Date(thisYear, i, 0).getDate() + 1;
        const day = Math.floor(Math.random() * (maxDay - 1) + 1);
        const daysEvents = events[day] || [];
        daysEvents.push(
          ...Array.from({ length: 5 }, () => {
            const start = Math.floor(Math.random() * 24);
            return {
              date: new Date(thisYear, i, day).toISOString(),
              title: "HOA Meeting",
              description: "This meeting will pertain to things and stuff",
              start,
              end: Math.floor(Math.random() * (24 - (start + 1)) + (start + 1)),
            };
          }),
        );
        events[day] = daysEvents;
      }
      return {
        year: thisYear,
        month: i,
        events,
      };
    });
  }
}
