import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock.model';

@Injectable()
export class StockService
{
    private url = 'https://api.iextrading.com/1.0/tops/last?symbols=';
    
    constructor(private http: HttpClient)
    {

    }
    
    getStocks(symbols:Array<string>)
    {
        const query = symbols.join(',');
        return this.http.get<Array<Stock>>(this.url + query);
    }
}