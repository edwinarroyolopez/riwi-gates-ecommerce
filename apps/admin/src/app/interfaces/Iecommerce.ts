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
    id:            number;
    name:          string;
    subcategories: Subcategory[];
}
export interface Subcategory {
    id: number;
    name: string;
}

export interface Size {
    id?:   number;
    name: string;
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
    roles:    [{id:number, name:string}];
}

export interface EditedUserAdminState {
    user: User;
  }

export interface TableRowProducts {
    product : Product,
    setDataToEdit: (product: Product | null) => void;
    deleteData: (id: string) => void;
}

export interface TableData {
    data : Product[],
    setDataToEdit: (product: Product | null) => void;
    deleteData: (id: string) => void;
}

export interface FilterProps {
    onFilter: (query: string) => void;
  }

export interface EditedProductState {
    category: Category;
    product: Product;
  }  