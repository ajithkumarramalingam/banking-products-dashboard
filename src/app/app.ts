
import { Component } from '@angular/core';
import { ProductCard, BankingProduct } from './product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  selectedProduct: BankingProduct | null = null;
  searchText = '';
  selectedCategory = 'All';

  products: BankingProduct[] = [
    {
      id: 1,
      name: 'Everyday Savings',
      category: 'Savings Account',
      status: 'Active',
      metricLabel: 'Available balance',
      metricValue: '₹85,000.00',
    },
    {
      id: 2,
      name: 'Platinum Rewards',
      category: 'Credit Card',
      status: 'Active',
      metricLabel: 'Available credit',
      metricValue: '₹25,000.00',
    },
    {
      id: 3,
      name: 'Home Finance',
      category: 'Home Loan',
      status: 'In Progress',
      metricLabel: 'Loan amount',
      metricValue: '₹12,50,000',
    },
    {
      id: 4,
      name: 'Growth Portfolio',
      category: 'Investment',
      status: 'Active',
      metricLabel: 'Portfolio value',
      metricValue: '₹1,20,000',
    },
  ];

  get categories(): string[] {
    return [
      'All',
      ...new Set(this.products.map(product => product.category)),
    ];
  }

  get filteredProducts(): BankingProduct[] {
    const search = this.searchText.trim().toLowerCase();

    return this.products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  openProductDetails(product: BankingProduct): void {
    this.selectedProduct = product;
  }

  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value;
  }
}