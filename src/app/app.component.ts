import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnChanges {
  title = "tip-calculator-app";
  billInput: number = 0;
  numberOfPeopleInput: number = 0;
  tipInput: number | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
