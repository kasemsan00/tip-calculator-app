import { Component, Input } from "@angular/core";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"],
})
export class ResultComponent {
  @Input() billInput: number | undefined;

  handleReset() {
    this.billInput = 0;
    console.log("HandleReset");
  }
}
