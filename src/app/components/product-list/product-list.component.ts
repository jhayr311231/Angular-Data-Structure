import { Component } from '@angular/core';
import { ProductListService } from '../../services/product-list.service'; // Import the service

// Define the Product interface directly in the component
interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = []; // Array to store products

  newProduct: Product = { name: '', price: 0, imageUrl: '' }; // New product object
  editIndex: number | null = null; // Index for editing mode

  constructor(private productListService: ProductListService) {
    // Fetch the initial list of products from the service
    this.products = this.productListService.getProductList();
  }

  // Add or edit product
  addProduct() {
    if (this.editIndex === null) {
      // Add a new product
      this.products.push({ ...this.newProduct }); // Spread operator to clone the product object
    } else {
      // Update the existing product
      this.products[this.editIndex] = { ...this.newProduct };
      this.editIndex = null; // Exit editing mode
    }
    this.resetForm(); // Reset the form after adding or editing
  }

  // Edit an existing product
  editProduct(index: number) {
    this.newProduct = { ...this.products[index] }; // Populate the form with the selected product
    this.editIndex = index; // Set the index for editing mode
  }

  // Remove a product
  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  // Reset the form after adding or editing
  resetForm() {
    this.newProduct = { name: '', price: 0, imageUrl: '' };
  }

  // Handle image selection and conversion to base64
  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.newProduct.imageUrl = reader.result as string; // Store the image as a base64 string
      };

      reader.readAsDataURL(file); // Convert the image to base64
    }
  }
}
