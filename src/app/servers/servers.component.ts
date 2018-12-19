import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  //selector: '.app-servers',
  // template: 
  // `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver','Testserver2'];
  
  counter: number = 0;
  toggleTimes = [];
  displaytext = false;
  // inputN = '';
 
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }
  
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'server was created, name is '+ this.serverName;
  }

  toggleP(){
    if (this.displaytext === false) {
      this.displaytext = true;
    }else{
      this.displaytext = false;
    }
    this.counter ++;
    this.toggleTimes.push(this.counter);
  }

  addClass(){
    if (this.toggleTimes.length > 5) {
      return true;
    }
  }

  

}
