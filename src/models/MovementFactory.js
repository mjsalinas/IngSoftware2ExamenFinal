import {
  IncomeMovement,
  ExpenseMovement,
  TransferMovement,
  RefundMovement,
} from "./Movement";

const registry = {
  INCOME: IncomeMovement,
  EXPENSE: ExpenseMovement,
  TRANSFER: TransferMovement,
  REFUND: RefundMovement,
};

export class MovementFactory {
  static register(type, clazz) {
    registry[type] = clazz;
  }

  static create(type, props) {
    const Clazz = registry[type];
    if (!Clazz) throw new Error(`Unknown movement type: ${type}`);
    return new Clazz(props);
  }
}
