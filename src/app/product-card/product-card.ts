
import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { transformedValue } from '@angular/forms/signals';

export interface BankingProduct {
  id: number;
  name: string;
  category: string;
  status: 'Active' | 'In Progress';
  metricLabel: string;
  metricValue: string;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true }) product!: BankingProduct;
  @Output() viewDetails = new EventEmitter<BankingProduct>();
  
  onViewDetails(): void {
    this.viewDetails.emit(this.product);
  }
}