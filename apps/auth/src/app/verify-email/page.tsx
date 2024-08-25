"use client"

import { deleteToken, tokenUser } from "@/services/tokenServices";
import { useSearchParams } from "next/navigation";

const VerifyPage = ()=>{
    const verificationTokenUrl = "http://localhost:3000/verificationToken";
    const searchParams = useSearchParams();

    const handleClick = async()=>{
        const token = searchParams.get("token");
        if(token){
            try{
                const getToken = await tokenUser(token, verificationTokenUrl);
                // const email = getToken[0].email;
                const tokenId = getToken[0].id
    
                await deleteToken(tokenId, verificationTokenUrl);
            }
            catch(e){
                console.log(e);

            }
        }
        
    }
    return(
        <button  onClick={handleClick}>Verificar</button>
    )
}

export default VerifyPage