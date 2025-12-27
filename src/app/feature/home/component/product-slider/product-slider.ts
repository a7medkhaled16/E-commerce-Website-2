import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


interface ProductCategory {
  id: number;
  name: string;
  itemCount: string;
  image: string;
}
@Component({
  selector: 'app-product-slider',
  imports: [CommonModule],
  templateUrl: './product-slider.html',
  styleUrl: './product-slider.css',
})
export class ProductSlider {
  currentOffset = signal(0);
  
  categories: ProductCategory[] = [
    {
      id: 1,
      name: 'Laptop',
      itemCount: '+ items',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Earbuds',
      itemCount: '+ items',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=200&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Keyboard',
      itemCount: '10 + items',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'TV & LCD',
      itemCount: '10 + items',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'RGB Mouse',
      itemCount: '10 + items',
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'Mobile Phones',
      itemCount: '10 + items',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop'
    },
    {
      id: 7,
      name: 'Handsfree',
      itemCount: '10 + items',
      image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=200&h=200&fit=crop'
    },
    {
      id: 8,
      name: 'Router',
      itemCount: '11 + items',
      image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=200&h=200&fit=crop'
    },
    {
      id: 9,
      name: 'Smartwatch',
      itemCount: '15 + items',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
    },
    {
      id: 10,
      name: 'Headphones',
      itemCount: '20 + items',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'
    },
    {
      id: 11,
      name: 'Camera',
      itemCount: '12 + items',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&h=200&fit=crop'
    },
    {
      id: 12,
      name: 'Tablet',
      itemCount: '8 + items',
      image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=200&h=200&fit=crop'
    },
    {
      id: 13,
      name: 'Speaker',
      itemCount: '18 + items',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop'
    },
    {
      id: 14,
      name: 'Console',
      itemCount: '6 + items',
      image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=200&h=200&fit=crop'
    },
    {
      id: 15,
      name: 'Printer',
      itemCount: '9 + items',
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=200&h=200&fit=crop'
    },
    {
      id: 16,
      name: 'Router',
      itemCount: '11 + items',
      image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=200&h=200&fit=crop'
    },
    {
      id: 17,
      name: 'Webcam',
      itemCount: '14 + items',
      image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=200&h=200&fit=crop'
    },
    {
      id: 18,
      name: 'Microphone',
      itemCount: '13 + items',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200&h=200&fit=crop'
    },
    {
      id: 19,
      name: 'Hard Drive',
      itemCount: '16 + items',
      image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=200&h=200&fit=crop'
    },
    {
      id: 20,
      name: 'Power Bank',
      itemCount: '22 + items',
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=200&h=200&fit=crop'
    }
  ];

  private readonly itemWidth = 184; // 160px width + 24px gap

  scrollLeft() {
    const newOffset = Math.max(0, this.currentOffset() - this.itemWidth * 3);
    this.currentOffset.set(newOffset);
  }

  scrollRight() {
    const maxOffset = (this.categories.length - 5) * this.itemWidth;
    const newOffset = Math.min(maxOffset, this.currentOffset() + this.itemWidth * 3);
    this.currentOffset.set(newOffset);
  }
  
}
