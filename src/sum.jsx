import { useState } from "react";

export default function Sumall(){
    const [sum, setsum] = useState(0);
    const [firstnum, setfirstnum] = useState(5);
    const [secondnum, setsecond] = useState(6);


    function sumof(){
        if(firstnum < secondnum){
            let ss = 0;
            for(let i = firstnum; i <= secondnum; i++){
                ss += i;
            }
            setsum(ss)
        }
        else{
            let ff = 0;
            for(let i = secondnum; i <= firstnum; i++){
                ff += i;
            }
            setsum(ff)
        }
    }

    return <>
    <h1><strong>sum of the given number</strong></h1>
    <input type="number" value={firstnum} onChange={(e)=>setfirstnum(Number(e.target.value))}/>
    <input type="number" value={secondnum} onChange={(e)=>setsecond(Number(e.target.value))}/>
    <button onClick={sumof}>sum</button>
    <p>the sum of the given number {sum}
    </p>
    </>
}