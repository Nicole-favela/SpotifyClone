export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
}

const reducer = (state, action)=>{
    //action has type: set_user and payload is user
    console.log(action); //helps debugging
    switch(action.type){
        case 'SET_USER': //listener that changes user according to what is dispatched
        console.log('user is set');
            return{
                ...state, //keep whats in state
                user: action.user
            }
        case 'SET_TOKEN': //listener that changes user according to what is dispatched
            console.log('token is set');
            return{
                ...state, //keep whats in state
                token: action.token
            }
        case 'SET_USER_PLAYLISTS':
            console.log('playlists set');
            return{
                ...state,
                playlists: action.playlists
            }
        default:
            return state; //original unchanged state
    }

}
export default reducer