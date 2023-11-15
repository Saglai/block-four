
export abstract class Product {
    abstract name: string;
    abstract price: number;

    abstract getQuantity(): number;
}