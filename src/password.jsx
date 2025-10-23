import { useState } from "react";

export default function Password(){
    const [password, setpassword] = useState("");
    const [length, setlngth] = useState(8);
    const value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";


    function addpassword(){
      let passwords = "";
        for(let i = 0; i< length; i++){
        let random = Math.floor(Math.random() * value.length);
        let pass = value[random];
        passwords += pass;
        }
        setpassword(passwords);
        //return password;

    }
    return (<>
    <h1>password generateto</h1>
    <input type="number"
    min={4}
    max={20}
    value={length}
    onChange={(e)=>setlngth(Number(e.target.value))} />
    <button onClick={ addpassword}>generate password</button>
    <p><strong>Your Pasword: {password}</strong></p>
    </>)
} 