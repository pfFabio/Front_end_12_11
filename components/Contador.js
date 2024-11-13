import { useState } from "react";


function Contador(){
    let [cont, setCont] = useState(0)

    function Conta(){
        setCont(cont+1)
    }

    return(
        <div>
            <button type='button'
            onClick={Conta}
            > contador</button>
            <h1>contagem: {cont}</h1>
        </div>
    )
}

export default Contador;