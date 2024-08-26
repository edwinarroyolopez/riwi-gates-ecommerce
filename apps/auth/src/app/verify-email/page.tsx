"use client"

import { deleteToken, tokenUser } from "@/services/tokenServices";
import { changeUserStatus, getUserByEmail } from "@/services/tokenUserService";
import { useSearchParams } from "next/navigation";

const VerifyPage = ()=>{
    const verificationTokenUrl = "http://localhost:3040/verificationToken";
    const searchParams = useSearchParams();

    const handleClick = async()=>{
        const token = searchParams.get("token");
        if(token){
            try{
                const getToken = await tokenUser(token, verificationTokenUrl);
                const email = getToken[0].email;
                const tokenId = getToken[0].id

                const user = await getUserByEmail(email);
                console.log(user);
                
                const userId = user[0].id;
    
                await changeUserStatus(userId);
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