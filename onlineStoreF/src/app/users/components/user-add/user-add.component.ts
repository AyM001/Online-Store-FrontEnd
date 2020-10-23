import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Address} from '../../model/address';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  user: User;
  address: Address;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
    this.user = new User();
    this.address = new Address();
    this.user.addressDto = this.address;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.goToUserList());
  }

  // tslint:disable-next-line:typedef
  goToUserList() {
    this.router.navigate(['/getUsers']);
  }


}
