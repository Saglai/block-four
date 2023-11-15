import { Product } from "./abstract-class";

export class TShort extends Product {
    private quantity = 100;

    constructor(public name: string, public price: number) {
        super()
    }

    getQuantity(): number {
        return this.quantity;
    }
}