import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 4, "autoplay": true, "centerMode": true };
  trend_products!: Product[];
  bestSeller_products!: Product[];
  highlight_products!: Product[];
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getTrendingProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.trend_products = data;
    });

    this.productService.getBestSellerProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.bestSeller_products = data;
    });

    this.productService.getHighlightProducts().subscribe((data: Product[]) => {
      console.log(data);
      this.highlight_products = data;
    });
  }
}
