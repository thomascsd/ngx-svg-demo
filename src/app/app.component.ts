import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  svgTitle = "Angular";

  changeTitle(value: string) {
    this.svgTitle = value;
  }
}
