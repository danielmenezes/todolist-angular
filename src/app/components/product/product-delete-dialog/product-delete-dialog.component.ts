import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-delete-dialog',
  templateUrl: './product-delete-dialog.component.html',
  styleUrls: ['./product-delete-dialog.component.css']
})
export class ProductDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit(): void {
  }

}
