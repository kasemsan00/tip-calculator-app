import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent {
  @Input() resultTipAmount: number | undefined;
  @Input() resultTotal: number | undefined;
  @Output() clearData: EventEmitter<any> = new EventEmitter<any>();
  handleReset() {
    this.clearData.emit();
  }
}
