export interface Products {
    category:        Category[];
    subcategory:     Subcategory[];
    products:        Product[];
    imagePromotions: ImagePromotion[];
    orders:          Order[];
    users:           User[];
    roles:           Category[];
    type_documents:  Category[];
    countries:       Category[];
    states:          State[];
    cities:          City[];
    permissions:     Permission[];
}

export interface Category {
    id:   number;
    name: string;
}

export interface City {
    id:       number;
    name:     string;
    state_id: number;
}

export interface ImagePromotion {
    id:        number;
    imagesUrl: string[];
}

export interface Order {
    order_id:    number;
    user_id:     number;
    order_date:  Date;
    products_id: number[];
}

export interface Permission {
    id:        number;
    canCreate: boolean;
    canRead:   boolean;
    canUpdate: boolean;
    canDelete: boolean;
    role_id:   number;
}

export interface Product {
    id:             number;
    name:           string;
    description:    string;
    price:          number;
    units:          number;
    category_id:    number;
    subcategory_id: number;
    images:         string[];
}

export interface State {
    id:         number;
    name:       string;
    country_id: number;
}

export interface Subcategory {
    id:          number;
    name:        string;
    category_id: number;
}

export interface User {
    id:               number;
    name:             string;
    document_number:  number;
    email:            string;
    password:         string;
    birthdate:        Date;
    cellphone:        string;
    zip_code:         string;
    address:          string;
    type_document_id: number;
    country_id:       number;
    role_id:          number;
}

