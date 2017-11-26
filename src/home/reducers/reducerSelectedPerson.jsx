export default function(state=null,action){
    // eslint-disable-next-line
    switch(action.type){
        case "SELECTED_PERSON":
            return action.payload;
    }
    return state;
}