import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  // tslint:disable-next-line:typedef
  getUsers() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  // tslint:disable-next-line:typedef
  addUser() {
    this.router.navigate(['addUser']);
  }

  // tslint:disable-next-line:typedef
  editUser(id: number) {
    this.router.navigate(['editUser', id]);
  }

  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    this.userService.delete(id).subscribe(data => {
      this.getUsers();
    });
  }
}
