import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:[`
  .online{
    color.white;
  }`]
})
export class ServerComponent implements OnInit {

  serverID =10;
  serverStatus='offline';
  serverAge=21

   constructor () {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
   }

    getserverStatus(){
    return this.serverStatus;   
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';  

  }

  ngOnInit() {
  }


}
