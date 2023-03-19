import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResultComponent } from "./result/result.component";
import { CalculateComponent } from "./calculate/calculate.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ResultComponent, CalculateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
