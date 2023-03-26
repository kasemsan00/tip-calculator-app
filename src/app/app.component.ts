import { Component, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "tip-calculator-app";
  resultTipAmount: number | undefined = 0;
  resultTotal: number | undefined = 0;
  bill: number | undefined = 0;

  billChange = (event: number | undefined) => {
    this.bill = event;
  };
  tipChange = (tip: any) => {
    if (this.bill !== undefined) {
      this.resultTipAmount = (this.bill * tip) / 100;
      this.resultTotal = this.resultTipAmount;
    }
  };
  numberOfPeopleChange = (num: any) => {
    if (this.resultTipAmount !== undefined) {
      this.resultTipAmount = this.resultTipAmount / num;
    }
  };
  resetAll = () => {
    console.log("reset");
  };
}
