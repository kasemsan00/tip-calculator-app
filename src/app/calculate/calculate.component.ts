import { Component, ElementRef, Input, QueryList, SimpleChanges, ViewChild, ViewChildren } from "@angular/core";

@Component({
  selector: "app-calculate",
  templateUrl: "./calculate.component.html",
  styleUrls: ["./calculate.component.css"],
})
export class CalculateComponent {
  @ViewChild("billInputDiv") billInputEle: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("numberOfPeopleDiv") numberOfPeopleInputEle: ElementRef<HTMLDivElement> | undefined;

  @ViewChild("tipCustomInput") public tipCustomInput: ElementRef<HTMLInputElement> | undefined;

  @ViewChildren("cmp") buttons: QueryList<HTMLDivElement> | undefined;
  @Input() billInput: number | undefined;
  @Input() numberOfPeopleInput: number | undefined;
  @Input() tipInput: number | undefined;
  isCustom = false;
  tipGroup = [5, 10, 15, 25, 50];

  ngOnChanges(changes: SimpleChanges) {
    // @ts-ignore
    console.log(changes);
  }
  handleClickTest = () => {
    console.log("Hello World");
  };
  handleBillFocus = () => {
    this.billInputEle?.nativeElement.classList.add("bill-input-outline");
  };
  handleBillBlur = () => {
    this.billInputEle?.nativeElement.classList.remove("bill-input-outline");
  };
  handleNumberPeopleFocus = () => {
    this.numberOfPeopleInputEle?.nativeElement.classList.add("number-of-people-input-outline");
  };
  handleNumberPeopleBlur = () => {
    this.numberOfPeopleInputEle?.nativeElement.classList.remove("number-of-people-input-outline");
  };
  handleModelNumberOfPeopleChange = (event: number | undefined) => {
    this.numberOfPeopleInput = event;
  };
  handleClickTip = (value: number) => {
    this.buttons?.map((item) => {
      const buttonValue = (item as unknown as ElementRef).nativeElement.value;
      if (parseInt(buttonValue) === value) {
        (item as unknown as ElementRef).nativeElement.classList.add("tip-active");
      } else {
        (item as unknown as ElementRef).nativeElement.classList.remove("tip-active");
      }
    });
  };
  handleClickTipCustom = () => {
    this.isCustom = true;
    this.buttons?.map((item) => {
      item = (item as unknown as ElementRef).nativeElement;
      item.classList.remove("tip-active");
    });
    this.tipCustomInput?.nativeElement.focus();
  };
}
