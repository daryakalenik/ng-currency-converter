import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ExchangeRatesService {
  constructor(private http: HttpClient) {}

  getCurrenciesNames() {
    return this.http
      .get("https://cdn.cur.su/api/latest.json")
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError("Server is not available");
        })
      )
      .pipe(map((data: any) => Object.keys(data.rates)));
  }

  getCurrenciesRates() {
    return this.http
      .get("https://cdn.cur.su/api/latest.json")
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError("Server is not available");
        })
      )
      .pipe(map((data: any) => data.rates));
  }

  getCurrencyRate(firstCurrency: string, secondCurrency: string) {
    return this.http
      .get("https://cdn.cur.su/api/latest.json")
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError("Server is not available");
        })
      )
      .pipe(
        map((data: any) => [
          {
            [firstCurrency]: data.rates[firstCurrency],
          },
          { [secondCurrency]: data.rates[secondCurrency] },
        ])
      );
  }

  getSingleCurrencyRate(currency: string) {
    return this.http
      .get("https://cdn.cur.su/api/latest.json")
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError("Server is not available");
        })
      )
      .pipe(map((data: any) => data.rates[currency]));
  }
}
