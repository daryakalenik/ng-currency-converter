import { Component, OnInit } from "@angular/core";
import { ExchangeRatesService } from "../exchange-rates.service";

@Component({
  selector: "app-currencies",
  templateUrl: "./currencies.component.html",
  styleUrls: ["./currencies.component.scss"],
})
export class CurrenciesComponent implements OnInit {
  constructor(private exchangeRatesService: ExchangeRatesService) {}
  currenciesNames: any;
  currencies: any;
  selectedCurrency = "USD";
  selectedCurrencyRate = 1;
  value = "";

  ngOnInit() {
    this.exchangeRatesService.getCurrenciesNames().subscribe((data) => {
      this.currenciesNames = data;
    });
    this.exchangeRatesService.getCurrenciesRates().subscribe((data) => {
      this.currencies = data;
    });
  }

  calculateCurrencyRate() {
    this.exchangeRatesService
      .getSingleCurrencyRate(this.selectedCurrency)
      .subscribe((data) => {
        this.selectedCurrencyRate = data;

        this.exchangeRatesService.getCurrenciesRates().subscribe((data) => {
          Object.keys(data).forEach((key) => {
            this.currencies[key] = (
              data[key] / this.selectedCurrencyRate
            ).toFixed(3);
          });
        });
      });
  }
}
