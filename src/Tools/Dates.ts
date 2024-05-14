export class Dates {
  public static readonly formatter = new Intl.DateTimeFormat("en-us", {
    dateStyle: "medium",
  });
  public static readonly months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  public static days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  public static month(index: number) {
    return this.months[index];
  }

  public static day(index: number) {
    return this.days[index];
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
