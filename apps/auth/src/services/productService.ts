import { IOptionsFetch, IProduct, ShowError } from "@/interfaces/productInterface";
import { Util } from "@/utils/util";

export class ProductService{
    private incrementSizesid = 0;
    private incrementImagesId = 0;
    private incrementCategoriesId = 0;
    static autoIncrementId(type:string){
        let numberIncrementSizes = 0;
        let numberIncrementImages = 0;
        let numberIncrementCategories = 0;

        switch(type){
            case "sizes":
                return function(){
                    return numberIncrementSizes++;
                };
            case "images":
                return function(){
                    return numberIncrementImages++;
                }
            case "categories":
                return function(){
                    return numberIncrementCategories++;
                }
            default: 
                return function(){
                    return 1
                }
        }        
    }
    
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
        const nameSize = sizes.map(size => size.name);
        const urlImage = images.map(image=>image.url);
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
                sizes: [
                    {
                        id: this.incrementSizesid+1,
                        name: nameSize
                    }
                ],
                images: [
                    {
                       id: this.incrementImagesId+1,
                       url: urlImage 
                    }
                ]
            })
        })
        return data
    }
}