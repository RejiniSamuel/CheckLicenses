import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatGridListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatGridListModule]
})
export class CustomMaterialModule {}
