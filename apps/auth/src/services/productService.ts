import { IOptionsFetch, IProduct, ShowError } from "@/interfaces/productInterface";
import { Util } from "@/utils/util";

export class ProductService{
    private incrementSizesId = 0;
    private incrementImagesId = 0;
    private incrementCategoriesId = 0;
    private incrementSubCategoriesId = 0;
    static async fetchApi(url: string, options?: IOptionsFetch): Promise<IProduct[] | IProduct|ShowError>{
        try{
            const response = await fetch(url,options);
            if(!response.ok){
                throw new Error("Error with the response");
            }
            return response.json();
        }catch(error){
            return ({message: "Error with the fetchApi", status: 500})
        }
    }

    static verifyDataStatus(data: IProduct[] | IProduct | ShowError, msgError: string): ShowError | undefined{
        if(data && "message" in data && "status" in data){
            console.log({message: msgError})
            return (data);
        }
        return;
    }

    async getProducts():Promise<{message: string, users: {}, status: number} | ShowError>{
       const data = await ProductService.fetchApi("http://localhost:3040/products");
       const dataStatusVerify = ProductService.verifyDataStatus(data, "Users not found");
       if(!dataStatusVerify){
        return ({message: "Get users correctly", users: data, status: 200});
       }
       return (dataStatusVerify);
    }

    async getProductById(product_id:string):Promise<{message: string, user: {}, status:number} | ShowError>{
        const data = await ProductService.fetchApi(`http://localhost:3040/products/${product_id}`);
        const dataStatusVerify = ProductService.verifyDataStatus(data, "User not found");
        if(!dataStatusVerify){
            return ({message: "Get user correctly", user: data, status: 200});
        }
        return (dataStatusVerify);
    }

    async postProduct(product:Partial<IProduct>){// Método para crear el producto
        const {name,description,price,stock,sizes, thumbnail, images, categories} = product;
        const dataVerifyExists = Util.verifyData(name,description,price,stock, thumbnail); // Verificar el estado de cada elemento, si es undifined o hay valor
        if(!dataVerifyExists){
            return ({message: "Is required all params [name,description,price,stock,thumbnail]"});
        }
        if(!sizes || !images || !categories){
            return ({message: "Is required all params [sizes,images, categories]"});
        }
        //Generar ID único para size
        const uniqueSizes = sizes.map((size)=>({
            id:++this.incrementSizesId,
            name: size.name
        }));

        //Generar ID único para images
        const uniqueImages = images.map((images)=>({
            id:++this.incrementImagesId,
            url: images.url
        }));
        //Generar id único para categories y subcategories
        const uniqueCategories = categories.map(categories =>({
            id: ++this.incrementCategoriesId,
            name: categories.name,
            subcategories: categories.subcategories.map(subcategories =>({
                id: ++this.incrementSubCategoriesId,
                name: subcategories.name
            }))
        }));

        const data = await ProductService.fetchApi("http://localhost:3040/products", { // Crear el producto
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ // Propiedades del objeto
                name,
                description,
                price,
                stock,
                thumbnail,
                sizes: uniqueSizes,
                images: uniqueImages,
                categories: uniqueCategories
            })
        })
        const verifyDataStatus = ProductService.verifyDataStatus(data,"");
        if(!verifyDataStatus){ // Mostrar que se crea correctamente el producto
            return ({message: "Created product correctly...", product: data, status: 201});
        }
        return (data); // Retornar la propagación de error con el fetchApi
    }
}