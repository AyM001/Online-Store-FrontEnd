import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  id: number;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    this.user = new User();
    this.id = this.route.snapshot.params.id;
    this.userService.getById(this.id).subscribe(data => {
      this.user = data;
    });
  }

  // tslint:disable-next-line:typedef
  goToUserList() {
    this.router.navigate(['/users']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.goToUserList());
  }

}
