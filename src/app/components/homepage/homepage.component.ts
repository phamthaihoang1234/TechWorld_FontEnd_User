import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

    ngOnInit(): void {
      this.router.events.subscribe((event) => {
          if(!(event instanceof NavigationEnd)){

            return;
          }

          window.scrollTo(0,0);


      })


    }

    getAllRate(){
        this.rateService.getAll().subscribe(data => {
            this.listRates = data as Rate[];

        })
    }

    getAvgRate(id: number) : number {
        let avgRating: number = 0;
        this.countRates = 0;
        for(const i of this.listRates){
          avgRating += i.rating;
          this.countRates++;
        }

        return Math.round(avgRating/this.countRates * 10) / 10;


    }

    getAllProductBestSeller(){
        this.productService.getBestSeller().subscribe(data => {
            this.productBestSeller = data as Product[];
            this.isLoading = false;


        }, error => {

          this.toastr.error('Lỗi server!', 'Hệ thống');
        })
      }

      getAllProductLatest(){
        this.productService.getLasted().subscribe(data => {
          this.productBestLatest = data as Product[];
          this.isLoading = false;
        }, errol => {
          this.toastr.error('Lỗi server!','Hệ thống')



        })
      }

      getAllProductRated() {
        this.productService.getRated().subscribe(data=>{
          this.productBestRated = data as Product[];
          this.isLoading = false;
        }, error=>{
          this.toastr.error('Lỗi server!', 'Hệ thống')   
          console.log(error);
             
        })
      }

      toggleLike(id: number){
        let email = this.sessionService.getUser();
        if(email == null){
          this.router.navigate(['/sign-form']);
          this.toastr.info('Hãy đăng nhập để sử dụng tính năng này của chúng tôi','Hệ thống');
          return;
        }
        this.favoriteService.getByProductIdAndEmail(id,email).subscribe(data => {
          if ( data == null){
            this.customerService.getByEmail(email).subscribe(data => {
              this.customer = data as Customer;
              this.favoriteService.post(new Favorites(0, new Customer(this.customer.userId), new Product(id))).subscribe(data => {
                  this.toastr.success('Thêm yêu thích thành công!','Hệ thống');
                  this.favoriteService.getByEmail(email).subscribe(data => {
                    this.favoriteList = data as Favorites[];
                    this.favoriteService.setLength(this.favoriteList.length);
                  }, error => {
                    this.toastr.error('Lỗi truy xuất dữ liệu', 'Hệ thống');
                  })
              })
            })
          } else {
              this.favorite = data as Favorites;
              this.favoriteService.delete(this.favorite.favoriteId).subscribe(data =>{
                this.toastr.info('Đã xóa khỏi danh sách yêu thích !', 'Hệ thống');
                this.favoriteService.getByEmail(email).subscribe(data => {
                  this.favoriteList = data as Favorites[];
                  this.favoriteService.setLength(this.favoriteList.length);
                }, errol => {
                  this.toastr.error('Lỗi truy xuất dữ liệu!', 'Hệ thống')
                })
              }, error => {
                this.toastr.error('Lỗi!', 'Hệ thống');
              })
          }
        })        
      }


      addCart(productId: number, price: number){
        let email = this.sessionService.getUser();
        if(email == null){
          this.cartDetail = new CartDetail(0, 1, price, new Product(productId), new Cart(1));
          this.cartListDetails.push(this.cartDetail);
          this.toastr.success('Thêm vào giỏ hàng thành công!', 'Hệ thống!');

        }
        this.cartService.getCart(email).subscribe(data => {
          this.cart = data as Cart;
          this.cartDetail = new CartDetail(0, 1, price, new Product(productId), new Cart(this.cart.cartId));
          this.cartService.postCartDetail(this.cartDetail).subscribe(data => {
            this.toastr.success('Thêm vào giỏ hàng thành công!', 'Hệ thống!');
            this.cartService.getAllCartDetail(this.cart.cartId).subscribe(data => {
              this.cartListDetails = data as CartDetail[];
              this.cartService.setLength(this.cartListDetails.length);
            })
          }, error => {
            this.toastr.error('Sản phẩm này có thể đã hết hàng!', 'Hệ thống');
            this.router.navigate(['/home']);
            window.location.href = "/";
          })
        })






      }


    

}
