import React, {useReducer} from "react";

const initialState = {cont: 0}

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return { cont: state.cont + 1};
        case 'decrement':
            return {cont: state.cont - 1};
        default:
            return state
    }
}


function Contador2(){
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <p>
                Contagem: { state.cont}
            </p>
            <button onClick={()=> dispatch({type:'increment'})}> + </button>
            <button onClick={()=> dispatch({type:'decrement'})}> - </button>
        </div>
    )
}


export default Contador2