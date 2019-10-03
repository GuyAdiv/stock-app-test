import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stocks-table',
  templateUrl: './stocks-table.component.html',
  styleUrls: ['./stocks-table.component.css']
})
export class StocksTableComponent implements OnInit {

    @Input() stocks: Array<Stock> = [];
    @Output() onStockRemoved:EventEmitter<Stock> = new EventEmitter();
    @Output() onStockClear:EventEmitter<void> = new EventEmitter();
    sortedByPrice: boolean;
    sortedBySymbol: boolean;

    constructor() { }

    ngOnInit() {
    }

    sortByPrice(desc: boolean) {
        let func = (a: Stock, b: Stock) => {
            return a.price - b.price;
        }

        if (desc) {
            func = (a: Stock, b: Stock) => {
                return b.price - a.price;
            }
        }

        return func;
    }

    sortBySymbol(desc: boolean) {
        let func = (a: Stock, b: Stock) => {
            const x = a.symbol.toLowerCase();
            const y = b.symbol.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        }

        if (desc) {
            func = (a: Stock, b: Stock) => {
                const x = a.symbol.toLowerCase();
                const y = b.symbol.toLowerCase();
                if (x > y) {return -1;}
                if (x < y) {return 1;}
                return 0;
            }
        }

        return func;
    }

    sortBy(sort: any) {
        this.stocks.sort(sort);
    }

    removeStock(stock:Stock) {
        this.onStockRemoved.emit(stock);
    }

    clearStocks() {
        this.onStockClear.emit();
    }
}
