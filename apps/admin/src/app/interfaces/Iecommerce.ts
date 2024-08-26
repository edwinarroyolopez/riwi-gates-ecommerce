export interface Products {
    products: Product[];
}

export interface Users {
    users: User[];
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
    id:       string;
    name:     string;
    email:    string;
    password: string;
    phone:    string;
    adress:   string;
    roles:    [id:number, name:string];
}

export interface EditedUserAdminState {
    user: User;
  }
