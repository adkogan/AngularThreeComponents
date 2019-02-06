import {Component, Input} from '@angular/core';

@Component({
  selector: 'person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent {
  @Input() person: Contact;


}

