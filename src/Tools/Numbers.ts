export class Numbers {
  public static formatter = new Intl.NumberFormat("en-us");
  public static currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  public static format(value: number) {
    return this.formatter.format(value);
  }

  public static formatCurrency(value: number) {
    return this.currencyFormatter.format(value);
  }
}
