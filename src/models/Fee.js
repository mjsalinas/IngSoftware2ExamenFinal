export class Fee {
  constructor(data) {
    this.id = data.id;
    this.amount = data.amount;
    this.type = "fee";
  }

  getNetAmount() {
    return -Math.abs(this.amount);
  }

  getIcon() {
    return "⚠️"; 
  }

  getColor() {
    return "orange";
  }
}
