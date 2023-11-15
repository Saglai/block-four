//1
type Point = {
    x: number,
    y: number
}

type P = keyof Point;
const a: P = 'x';

//2 
type Payment = {
    amount: number,
    currency: string
}
type ObjectKey<obj> = keyof obj;

type PaymentKeys = ObjectKey<Payment>;

//3 

type MyReturnType<T extends (...args: any[]) => any> = 
    T extends (...args: any[]) => infer ReturnType ? ReturnType : null;
