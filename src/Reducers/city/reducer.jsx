import { ADD_CITY} from "./action";
const initState={
    city:localStorage.getItem("city")||null
}

export const cityreducer=(store=initState,{type,payload})=>{
    
    switch(type){
        case ADD_CITY:localStorage.setItem( "city",payload||null);
            case ADD_CITY:
            return {...store,city:payload};

            default:return store;
    }
}