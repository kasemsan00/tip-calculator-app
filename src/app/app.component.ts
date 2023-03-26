import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "tip-calculator-app";
  resultTipAmount: number | undefined = 0;
  resultTotal: number | undefined = 0;
  @Output() billInput: number | undefined;
  @Output() tipInput: number | undefined;
  @Output() numberOfPeopleInput: number | undefined;

  billChange = (event: number | undefined) => {
    this.billInput = event;
  };
  tipChange = (tip: any) => {
    if (this.billInput !== undefined) {
      this.resultTipAmount = (this.billInput * tip) / 100;
    }
  };
  numberOfPeopleChange = (num: number) => {
    if (this.resultTipAmount !== undefined && this.billInput !== undefined) {
      const diff = this.billInput / num;
      this.resultTipAmount = this.resultTipAmount / num;
      this.resultTotal = diff + this.resultTipAmount;
    }
  };
  clearData = () => {
    this.billInput = 0;
    this.tipInput = 0;
    this.numberOfPeopleInput = 0;
    this.resultTipAmount = 0;
    this.resultTotal = 0;
  };
}
