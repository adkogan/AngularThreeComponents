import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPerson: Contact|null=null;

  contacts:Contact[]=[];
  currentIndex:number=-1;



  remove(indx:number):void{
    this.contacts.splice(indx,1 );
    if(indx == this.currentIndex){
      this.currentPerson = null;
    }
  }

  selectCurrent(contact:Contact,indx:number):void{
    this.currentPerson = contact;
    this.currentIndex = indx;
  }

  receiveContact($event: Contact) {
    this.contacts.push($event);
  }
}

