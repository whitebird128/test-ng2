import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    message: string = "hello";
    users: User[] = [
        { id: 25, name: 'chris', username: 'sevilyha'},
        { id: 26, name: 'Nick', username: 'whatnicktweets'},
        { id: 27, name: 'Holly', username: 'hollyawly'}
    ];
    activeUser;
    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}