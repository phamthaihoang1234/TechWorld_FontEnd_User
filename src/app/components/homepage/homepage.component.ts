import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/common/Cart';
import { CartDetail } from 'src/app/common/CartDetail';
import { Customer } from 'src/app/common/Customer';
import { Favorites } from 'src/app/common/Favorites';
import { Product } from 'src/app/common/Product';
import { Rate } from 'src/app/common/Rate';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ProductService } from 'src/app/services/product.service';
import { RateService } from 'src/app/services/rate.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  // trend_products!: Product[];
  // bestSeller_products!: Product[];
  // highlight_products!: Product[];
  // constructor(private productService: ProductService) {}
  // ngOnInit(): void {
  //   this.productService.getTrendingProducts().subscribe((data: Product[]) => {
  //     console.log(data);
  //     this.trend_products = data;
  //   });

  //   this.productService.getBestSellerProducts().subscribe((data: Product[]) => {
  //     console.log(data);
  //     this.bestSeller_products = data;
  //   });

  //   this.productService.getHighlightProducts().subscribe((data: Product[]) => {
  //     console.log(data);
  //     this.highlight_products = data;
  //   });
  // }

  customer! : Customer;
  favoriteList! : Favorites[];
  favorite ! : Favorites;

  productBestSeller! : Product[];
  productBestLatest ! : Product[];
  productBestRated !: Product[];

  cart! : Cart;
  cartDetail ! : CartDetail;
  cartListDetails ! : CartDetail[];

  listRates! : Rate[];
  countRates! : number;

  isLoading = true;

  config = {"SliceConfig": 8,"slideToScroll":2, "autoplay":true};

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private cartService: CartService,
    private favoriteService: FavoritesService,
    private customerService: CustomerService,
    private rateService: RateService,
    private router: Router
    
    ) { }


    

}
