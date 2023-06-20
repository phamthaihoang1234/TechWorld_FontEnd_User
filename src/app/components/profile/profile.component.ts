import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/common/Customer';
import { CustomerService } from 'src/app/services/customer.service';
import { ProfileService } from 'src/app/services/profile.service';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  "customer": Customer;
  private email = this.sessionService.getUser();

  constructor(private sessionService: SessionService,
              private customerService: CustomerService,
              private router: Router, 
              private profileService: ProfileService) {}

  ngOnInit(): void {
    console.log(this.email);
      this.profileService.getPersonalProfile(this.email).subscribe(u => {
        console.log(u);
        this.customer = u;
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Chưa đăng nhập',
          showConfirmButton: false,
          timer: 1500
        })
      });
    
  }

  
  
}
