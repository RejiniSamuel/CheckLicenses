import { Component, OnInit } from "@angular/core";
import { Licensee } from "./licensee.model";

@Component({
  selector: "app-licensee-list",
  templateUrl: "./licensee-list.component.html",
  styleUrls: ["./licensee-list.component.css"]
})
export class LicenseeListComponent implements OnInit {
  licensees: Licensee[] = [
/*     new Licensee("Test Licensee 1", "02/20", "red", "03/02/1993", "191569"),
    new Licensee("Test Licensee 1", "02/20", "red", "03/02/1993", "191569") */
  ];
  constructor() {}

  ngOnInit() {}
}
