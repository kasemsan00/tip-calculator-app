import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren } from "@angular/core";

@Component({
  selector: "app-calculate",
  templateUrl: "./calculate.component.html",
  styleUrls: ["./calculate.component.css"],
})
export class CalculateComponent {
  @ViewChild("billInputDiv") billInputEle: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("numberOfPeopleDiv") numberOfPeopleInputEle: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("tipCustomInput") tipCustomInput: ElementRef<HTMLInputElement> | undefined;

  @ViewChildren("cmp") buttons: QueryList<HTMLDivElement> | undefined;
  @Input() billInput: number | undefined;
  @Input() tipInput: number | undefined;
  @Input() numberOfPeopleInput: number | undefined;
  @Output() billChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() tipChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() numberOfPeopleChange: EventEmitter<any> = new EventEmitter<any>();

  isCustom = false;
  tipGroup = [5, 10, 15, 25, 50];

  handleBillFocus = () => {
    this.billInputEle?.nativeElement.classList.add("bill-input-outline");
  };
  handleBillBlur = () => {
    this.billInputEle?.nativeElement.classList.remove("bill-input-outline");
  };
  handleBillChange = (value: number) => {
    this.billChange.emit(value);
  };
  handleNumberPeopleFocus = () => {
    this.numberOfPeopleInputEle?.nativeElement.classList.add("number-of-people-input-outline");
  };
  handleNumberPeopleBlur = () => {
    this.numberOfPeopleInputEle?.nativeElement.classList.remove("number-of-people-input-outline");
  };
  handleModelNumberOfPeopleChange = (event: number | undefined) => {
    this.numberOfPeopleChange.emit(event);
  };

  handleClickTip = (value: number) => {
    this.tipChange.emit(value);
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
  handleTipCustomChange = (event: any) => {
    this.tipChange.emit(event);
  };
}
