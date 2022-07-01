import { Component, OnInit } from "@angular/core";
import { ExchangeRatesService } from "../exchange-rates.service";

@Component({
  selector: "app-converter",
  templateUrl: "./converter.component.html",
  styleUrls: ["./converter.component.scss"],
})
export class ConverterComponent implements OnInit {
  constructor(private exchangeRatesService: ExchangeRatesService) {}
  currenciesNames: any;
  currencies: any;
  firstSelectedCurrency = "USD";
  secondSelectedCurrency = "USD";
  firstSum = 0;
  secondSum = 0;

  ngOnInit() {
    this.exchangeRatesService.getCurrenciesNames().subscribe((data) => {
      this.currenciesNames = data;
    });
    this.exchangeRatesService.getCurrenciesRates().subscribe((data) => {
      this.currencies = data;
    });
  }

  changeCurrency() {}

  convertCurrencies() {
    if (this.firstSelectedCurrency === this.secondSelectedCurrency) {
      this.secondSum = this.firstSum;
    } else if (
      this.firstSelectedCurrency === "USD" &&
      this.secondSelectedCurrency !== "USD"
    ) {
      this.secondSum = +(
        this.firstSum * this.currencies[this.secondSelectedCurrency]
      ).toFixed(3);
    } else if (
      this.firstSelectedCurrency !== "USD" &&
      this.secondSelectedCurrency === "USD"
    ) {
      this.secondSum = +(
        this.firstSum / this.currencies[this.firstSelectedCurrency]
      ).toFixed(3);
    } else {
      this.secondSum = +(
        (this.currencies[this.secondSelectedCurrency] /
          this.currencies[this.firstSelectedCurrency]) *
        this.firstSum
      ).toFixed(3);
    }
  }
}
