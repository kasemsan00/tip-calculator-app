import { Component, ElementRef, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from "@angular/core";

@Component({
  selector: "app-calculate",
  template: ` <a (click)="changeFromChild()">Change from child</a>
    <br />
    {{ parentData }}`,
  styleUrls: ["./calculate.component.css"],
})
export class CalculateComponent implements OnChanges, OnInit {
  @ViewChild("billInputDiv") billInputEle: ElementRef<HTMLDivElement> | undefined;
  @ViewChild("numberOfPeopleDiv") numberOfPeopleInputEle: ElementRef<HTMLDivElement> | undefined;

  @ViewChild("tipCustomInput") public tipCustomInput: ElementRef<HTMLInputElement> | undefined;

  @ViewChildren("cmp") buttons: QueryList<HTMLDivElement> | undefined;
  @Input() billInput: number | undefined;
  @Input() numberOfPeopleInput: number | undefined;
  @Input() tipInput: number | undefined;
  @Input() loggedIn: boolean = false;

  @Input() parentData: any;

  isCustom = false;
  tipGroup = [5, 10, 15, 25, 50];

  handleBillFocus = () => {
    this.billInputEle?.nativeElement.classList.add("bill-input-outline");
  };
  handleBillBlur = () => {
    this.billInputEle?.nativeElement.classList.remove("bill-input-outline");
  };
  handleBillChange = (event: number) => {
    this.billInput = event;
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

  changeFromChild() {
    console.log("change from child");
    this.parentData -= 1;
  }

  handleClickTip = (value: number) => {
    this.loggedIn = true;
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ng on init");
  }
}
