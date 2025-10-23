import { useState } from "react"

export default function Primesum(){

    const [sum, setsum] = useState();

    const [num, setnum] = useState(7);

    function tosum(){
        if(num < 2){
            return 0;
        }
        let ss = 0;
        function isit(n){
            if(n < 2){
                return false;
            }
            for(let i =2; i <= Math.sqrt(n); i++){
                if(n % i ===0) return false;
            }
            return true
        }
        for (let i = 2; i <= num; i++) {
          if(isit(i)){
            ss += i;
          }            
        }
        setsum(ss);
    }

return <>
<h1>the of all prime numbers</h1>
<input type="number" value={num} onChange={(e) => setnum(Number(e.target.value))}/>
<button onClick={tosum}>click to chck the sum</button>
<p>the sum of the prime number {sum}</p>
</>
}
