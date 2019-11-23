import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SvgTitleComponent } from "./svg-title/svg-title.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SvgTitleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
