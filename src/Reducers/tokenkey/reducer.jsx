import { ADD_TOKEN} from "./action";

const initState={
    token: localStorage.getItem("token")||null
}

export const tokenreducer=(store=initState,{type,payload})=>{
    
    switch(type){
        case ADD_TOKEN:localStorage.setItem("token", payload||null);
            case ADD_TOKEN:
            return {...store,token:payload};

            default:return store;
    }
}