import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConverterComponent } from "./converter/converter.component";
import { CurrenciesComponent } from "./currencies/currencies.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "converter", component: ConverterComponent },
  { path: "currencies", component: CurrenciesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
