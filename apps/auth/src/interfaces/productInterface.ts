export interface IProduct{
    name: string,
    description: string,
    price: number,
    stock: number,
    sizes: ISize[]
    thumbnail: string,
    images: IImage[],
    categories: ICategory[]
}

interface ISize{
    name: string
}

interface IImage{
    url: string
}

interface ICategory{
    name: string
    subcategories: ISubcategory[]
}

interface ISubcategory{
    name: string
}

export interface IOptionsFetch{
    method?: string, 
    headers?: {},
    body?: string
}

export interface ShowError{
    message: string,
    status: number
}