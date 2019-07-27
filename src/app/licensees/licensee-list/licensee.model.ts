export class Licensee {
  public name: string;
  public expdate: string;
  public licStatus: string;
  public licdate: string;
  public licno: string;

  constructor(
    name: string,
    expdate: string,
    licStatus: string,
    licdate: string,
    licno: string
  ) {
    this.name = name;
    this.expdate = expdate;
    this.licStatus = licStatus;
    this.licdate = licdate;
    this.licno = licno;
  }
}
