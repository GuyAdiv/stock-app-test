export class Stock {
    symbol: string;
    price: number;
    size: number;
    time: number;

    constructor(symbol: string, price:number, size:number, time:number){
        this.symbol = symbol;
        this.price = price;
        this.size = size;
        this.time = time;
    }
}