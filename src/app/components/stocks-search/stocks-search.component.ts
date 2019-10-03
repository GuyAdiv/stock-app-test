import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stocks-search',
  templateUrl: './stocks-search.component.html',
  styleUrls: ['./stocks-search.component.css']
})
export class StocksSearchComponent implements OnInit {

    @Output() onStockSearch:EventEmitter<string> = new EventEmitter();
    symbole: string;

    constructor() { }

    ngOnInit() {
    }

    onBtnSearchClick() {
        this.onStockSearch.emit(this.symbole);
    }
}
