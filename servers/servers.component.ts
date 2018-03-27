import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
 allowNewServer = false;
 serverCreationStatus = 'No Server was Created';
 serverName=''; 
 serverName2way='Testserver';
 serverCraeted = false;
 servers = ['Testserver', 'Testserver 2'];
 
 constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);
    
  }

  ngOnInit() {
  }
  onCreateServer():any {
    this.serverCraeted=true;
    this.servers.push(this.serverName); 
    this.serverCreationStatus ='Server was Created' +  " " +this.serverName2way  ;
  }

  onUpdateServerName(event : any)
  {
    console.log(event);
  }

  //Explicit Casting: providing our value to the server target.
  onUpdateServerName1(event  : Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
