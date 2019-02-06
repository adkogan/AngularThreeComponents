import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent {
  @Output() contactOutput = new EventEmitter<Contact>();

  currName='';
  currEmail='';
  currPhone='';
  currAddress='';

  addContact(){
    this.contactOutput.emit({
      name:this.currName,
      email:this.currEmail,
      phone:this.currPhone,
      address:this.currAddress
    });
    this.currName='';
    this.currAddress='';
    this.currPhone='';
    this.currEmail='';
  }
}

