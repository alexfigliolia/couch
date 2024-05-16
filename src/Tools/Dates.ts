export class Dates {
  public static TODAY = new Date();
  public static readonly formatter = new Intl.DateTimeFormat("en-us", {
    dateStyle: "medium",
  });
  public static readonly months = Array.from({ length: 12 }, (_, i) => {
    const today = new Date();
    today.setDate(1);
    today.setMonth(i);
    return today.toLocaleString("default", { month: "long" });
  });

  public static days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  public static month(date: Date) {
    return date.toLocaleString("default", { month: "long" });
  }

  public static day(date: Date) {
    return date.toLocaleString("default", { weekday: "long" });
  }

  public static format(date: Date) {
    return this.formatter.format(date);
  }

  public static match(date1: Date, date2: Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
