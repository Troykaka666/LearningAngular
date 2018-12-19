import { Component } from '@angular/core';

@Component({
    selector: 'app-server', //name that can be referenced while using in the main html
    templateUrl: './server.component.html', //new component deriectory
    styles: [`
    .online{
        color:white;
    }
    `]
})

export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'blue' : 'red';
    }
}