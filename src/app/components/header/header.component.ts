import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/common/Cart';
import { CartDetail } from 'src/app/common/CartDetail';
import { Category } from 'src/app/common/Category';
import { Favorites } from 'src/app/common/Favorites';
import { CartService } from 'src/app/services/cart.service';
import { CategoryService } from 'src/app/services/category.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLogin: boolean = false;
  categories!: Category[];
  favorites!: Favorites[];
  cartDetails!: CartDetail[];
  cart!: Cart;

  totalFavoriteItem!: number;
  totalCartItem!: number;
  keyword: string = ' ';

  constructor(
    private categoryService: CategoryService,
    private cartService: CartService,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private customerService: CustomerService,
    private router: Router,
    private favoriteService: FavoritesService) { }


    ngOnInit(): void {
      
      this.checkLogin();
    }


    checkLogin() {
      let email = this.sessionService.getUser();
      this.customerService.getByEmail(email).subscribe(data => {
        this.isLogin = true;
      }, error => {
        this.sessionService.signOut();
        this.router.navigate(['home']);
      })
    }

    
  
    
  
    logout() {
      this.sessionService.signOut();
      window.location.href = ('/');
    }

}
