import { IOptionsFetch, IProduct, ShowError } from "@/interfaces/productInterface";
import { Util } from "@/utils/util";

export class ProductService{
    private incrementSizesId = 0;
    private incrementImagesId = 0;
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

    async postProduct(product:Partial<IProduct>){
        const {name,description,price,stock,sizes, thumbnail, images, categories} = product;
        const dataVerifyExists = Util.verifyData(name,description,price,stock, thumbnail);
        if(!dataVerifyExists){
            return ({message: "Is required all params [name,description,price,stock,thumbnail]"});
        }
        if(!sizes || !images || !categories){
            return ({message: "Is required all params [sizes,images, categories]"});
        }
        //Generar ID único para size
        const uniqueSizes = sizes.map((size,index)=>({
            id:++this.incrementSizesId,
            name: size.name
        }));

        //Generar ID único para images
        const uniqueImages = images.map((images,index)=>({
            id:++this.incrementImagesId,
            name: images.url
        }))

        console.log("sdasda")
        const data = await ProductService.fetchApi("http://localhost:3040/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                description,
                price,
                stock,
                sizes: uniqueSizes,
                images: uniqueImages
            })
        })
        return data
    }
}