export default function(state=[{
    name:"vimal RAj",
    DOB:"27-01-2017",
    degree:"MCA"
}],action){
    // eslint-disable-next-line
    switch (action.type){
        case "BIO_LIST":
        return action.payload;
    }
    return state
}