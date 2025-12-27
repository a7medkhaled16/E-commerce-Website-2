import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {


   values = [
    {
      title: 'Quality First',
      description: 'We carefully curate every product to ensure the highest standards of quality and excellence.',
      icon: '<path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed your expectations.',
      icon: '<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Innovation',
      description: 'We constantly evolve and adopt new technologies to enhance your shopping experience.',
      icon: '<path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Sustainability',
      description: 'We are committed to eco-friendly practices and reducing our environmental impact.',
      icon: '<path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd"/><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"/>',
      bgColor: 'bg-amber-100',
      iconColor: 'text-amber-600'
    }
  ];

  stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '10K+', label: 'Products' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Support' }
  ];

  team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder' , img: 'imges/pexels-olly-3756679.jpg' },
    { name: 'Michael Chen', role: 'CTO' , img: 'imges/pexels-olly-3760514.jpg'},
    { name: 'Emily Davis', role: 'Head of Design' , img:'imges/pexels-andersonguerra-1197132.jpg' },
    { name: 'James Wilson', role: 'Customer Success' , img: 'imges/image.png'}
  ];

}
