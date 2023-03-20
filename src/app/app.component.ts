import { Component, EventEmitter, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "tip-calculator-app";
  billInput: number | undefined;
  numberOfPeopleInput: number | undefined;
  tipInput: number | undefined;
}
