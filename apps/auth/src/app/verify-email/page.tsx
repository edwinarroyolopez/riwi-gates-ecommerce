"use client"

import { deleteToken, tokenUser } from "@/services/tokenServices";
import { changeUserStatus, deleteUser, getUserByEmail } from "@/services/tokenUserService";
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';

const VerifyPage = ()=>{
    const verificationTokenUrl = "http://localhost:3040/verificationToken";
    const userUrl = "http://localhost:3040/users"
    const searchParams = useSearchParams();

    const router = useRouter();

    const handleClick = async()=>{
        const token = searchParams.get("token");
        if(token){
            try{
                const getToken = await tokenUser(token, verificationTokenUrl);
                const email = getToken[0].email;
                const tokenId = getToken[0].id; 
                const tokenExpires = getToken[0].expires;

                const user = await getUserByEmail(email);
                console.log(user);
                
                const userId = user[0].id;
    
                if(tokenExpires >= new Date().getTime()){
                    await changeUserStatus(userId);
                    await deleteToken(tokenId, verificationTokenUrl);
                    alert("Usuario validado exitosamente")
                    router.push('/login');
                }
                else{
                    alert("Token expiro, vuelvase a registrar");
                    await deleteToken(tokenId, verificationTokenUrl);
                    await deleteUser(userId, userUrl);
                    router.push('/register');
                }
                
            }
            catch(e){
                alert("No se pudo validar cuenta");
                router.push('/login');
                console.log(e);
            }
        }
        
    }
    return(
        <button  onClick={handleClick}>Verificar</button>
    )
}

export default VerifyPage