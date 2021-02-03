import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PreventDoubleClickDirective } from "./prevent-double-click.directive";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: [PreventDoubleClickDirective],
  exports: [
    PreventDoubleClickDirective
  ]
})
export class PreventDoubleClickModule {}
