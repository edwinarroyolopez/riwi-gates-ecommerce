export interface Size {
    id: number;
    name: string;
  }
  
  export interface Image {
    id: number;
    url: string;
  }
  
  export interface Subcategory {
    id: number;
    name: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    subcategories: Subcategory[];
  }
  
  export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    size: Size[];
    thumbnail: string;
    images: Image[];
    categories: Category[];
  }
  