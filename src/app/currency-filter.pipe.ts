import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currencyFilter",
})
export class CurrencyFilterPipe implements PipeTransform {
  arr = [];
  transform(currencies, value) {
    if (currencies === null || value === "") {
      return currencies;
    }
    return currencies.filter((item) => {
      return item.key.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
