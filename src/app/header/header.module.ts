import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header.component";
import { ActivatedRoute } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule {}
