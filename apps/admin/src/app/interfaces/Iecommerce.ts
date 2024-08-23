export interface Products {
    users:    User[];
    products: Product[];
}

export interface Product {
    id:          string;
    name:        string;
    description: string;
    price:       number;
    stock:       number;
    size:        Size[];
    thumbnail:   string;
    images:      Image[];
    categories:  Category[];
}

export interface Category {
    men:   Kid[];
    women: Woman[];
    kids:  Kid[];
}

export interface Kid {
    subCategories: KidSubCategory[];
}

export interface KidSubCategory {
    jeans:  Size[];
    shirts: Size[];
}

export interface Size {
    id:   number;
    name: string;
}

export interface Woman {
    subCategories: WomanSubCategory[];
}

export interface WomanSubCategory {
    jeans:   Size[];
    shirts:  Size[];
    clothes: Size[];
}

export interface Image {
    id:  number;
    url: string;
}

export interface User {
    id:       number;
    name:     string;
    email:    string;
    password: string;
    phone:    string;
    adress:   string;
    roles:    Size[];
}

// Interface para gestionar el estado del producto editado
export interface EditedProductState {
    category: Category;
    product: Product;
  }