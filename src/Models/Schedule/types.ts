export interface ISchedule {
  schedules: ICalendar[];
  activeEvents: IEvent[];
  activeDate: Date;
  datePicker: boolean;
}

export interface ICalendar {
  year: number;
  month: number;
  events: Record<number, IEvent[]>;
}

export interface IEvent {
  date: string;
  title: string;
  description: string;
  start: number;
  end: number;
}
