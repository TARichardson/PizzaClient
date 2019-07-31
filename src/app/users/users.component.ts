import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    this.service.getAll().subscribe((data) => {
      console.log('UserData: ', data);
    });
  }

}
