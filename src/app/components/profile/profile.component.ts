import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/common/Customer';
import { ProfileService } from 'src/app/services/profile.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  customer!: Customer;
  private email = this.sessionService.getUser();

  constructor(private sessionService: SessionService, 
              private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getPersonalProfile(this.email).subscribe((c : Customer) => {
      this.customer = c;
    });
    
  }

  
  
}
