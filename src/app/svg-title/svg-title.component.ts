import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-svg-title",
  templateUrl: "./svg-title.component.svg",
  styleUrls: ["./svg-title.component.css"]
})
export class SvgTitleComponent implements OnInit {
  @Input() title = "";

  constructor() {}

  ngOnInit() {}
}
