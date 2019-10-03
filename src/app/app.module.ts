import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocksComponent } from './views/stocks/stocks.component';
import { StocksSearchComponent } from './components/stocks-search/stocks-search.component';
import { StocksTableComponent } from './components/stocks-table/stocks-table.component';

import { StockService } from './services/stock.service';

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StocksSearchComponent,
    StocksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
