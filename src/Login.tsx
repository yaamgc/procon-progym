import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "./firebase";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const login = async() => {
        try{
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
        } catch(error){
            console.error(error);
            alert("login failed");
        }
    }

    return(
        <div className="mt-20 w-100 bg-red-500 m-auto text-center rounded-xl p-5">
        <h1 className="text-white text-3xl font-bold m-4">LOGIN</h1>
        <input type="email" className="bg-white rounded-[10px] pl-2 m-2" onChange={(e) => setEmail(e.target.value)} value={email}/><br />
        <input type="password" className="bg-white rounded-[10px] pl-2 m-2" onChange={(e) => setPassword(e.target.value)} value={password}/><br />
        <button onClick={login} className="bg-white rounded-[10px] w-20 font-bold text-red-500 mt-5">login</button>
        </div>
    )
}