import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "myapp",
  template: `
    <ul>
      <li *ngFor="let item of items | async">
        {{ item.name }}
      </li>
    </ul>
  `
})
export class MyApp {
  items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection("items").valueChanges();
  }
}
