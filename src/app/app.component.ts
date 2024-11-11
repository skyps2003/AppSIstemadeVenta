import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './api/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  product: any = {};

	constructor(
		private productService:ProductService
	) {}

	ngOnInit() {
		this.productService.getData().subscribe({
			next: (response: any) => {
				this.product = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}
