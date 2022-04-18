import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductDeleteDialogComponent } from '../product-delete-dialog/product-delete-dialog.component';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[];
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(
    private productService: ProductService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    })
  }

  openDialog(product: Product): void {
    const dialogref = this.dialog.open(ProductDeleteDialogComponent, {
      data: product
    })

    dialogref.afterClosed().subscribe((value) => {
        if(value) {
          this.productService.delete(product.id.toString()).subscribe(() => {
          this.productService.showMessage('Produto excluido com sucesso!')
          this.ngOnInit()
        })
      }
    })
  }

}
