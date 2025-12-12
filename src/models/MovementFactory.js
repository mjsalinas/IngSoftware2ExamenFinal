import { Deposit } from "./Deposit";
import { Withdrawal } from "./Withdrawal";
import { Transfer } from "./Transfer";
import { Payment } from "./Payment";

const registry = {
  deposit: Deposit,
  withdrawal: Withdrawal,
  transfer: Transfer,
  payment: Payment,
};

export class MovementFactory {
  static register(type, clazz) {
    registry[type] = clazz;
  }

  static create(data) {
    const type = data.type;
    const Clazz = registry[type];

    if (!Clazz) {
      console.error("Tipo desconocido:", type);
      return null;
    }

    return new Clazz(data);
  }
}