import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
cadets = [
  {id: 0, name: 'Subodh Modgil'},
  {id: 1, name: 'Aaminr Khan'},
  {id: 2, name: 'Warren Buffet'},
];

onAdd() {
  this.cadets.push({id: 3, name: 'Harbhajan'});
}

onRemove(cadet) {
  const index = this.cadets.indexOf(cadet);
  this.cadets.splice(index, 1);
}
}
