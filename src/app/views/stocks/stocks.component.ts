import { Component, OnInit } from '@angular/core';

import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

    stocks: Array<Stock> = [];

    constructor(private stockService:StockService)
    {
  
    }
  
    onStockSearch(symbol: string) {
        if (!symbol || !symbol.trim()) {
            return;
        }
        const symbols = symbol.split(',');
        this.stockService.getStocks(symbols).subscribe(data => {
            data.forEach(stock => {
                this.addNewStock(stock);
            })
        }, error => {
            console.log(error);
        });
    }
  
    onStockRemove(stockToRemove:Stock) {
        this.stocks = this.stocks.filter((stock) => {
          return stock.symbol !== stockToRemove.symbol;
        })
    }
  
    addNewStock(stock: Stock) {
      this.stocks.push(stock);
    }

    onStockClear() {
        this.stocks = [];
    }
  
    ngOnInit()
    {
    }  

}
