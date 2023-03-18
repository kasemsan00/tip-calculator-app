import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("billInput") billInput: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("numberOfPeopleInput") numberOfPeopleInput: ElementRef<HTMLDivElement> | undefined;
  title = "tip-calculator-app";
  handleBillFocus = () => {
    this.billInput?.nativeElement.classList.add("bill-input-outline");
  };
  handleBillBlur = () => {
    this.billInput?.nativeElement.classList.remove("bill-input-outline");
  };
  handleNumberPeopleFocus = () => {
    this.numberOfPeopleInput?.nativeElement.classList.add("number-of-people-input-outline");
  };
  handleNumberPeopleBlur = () => {
    this.numberOfPeopleInput?.nativeElement.classList.remove("number-of-people-input-outline");
  };
}
