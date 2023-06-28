export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    recents: null,
    playingrn: null,
    isPlaying: null,
    spotifyApi: null,
    sidebarplaylist: null,
    musiclibrary: null,
    sidebarlibraryitem: null,
    selectedSidebarOption: null,
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
        case 'SET_RECENTLY_PLAYED_TRACKS':
            console.log('recent tracks set');
            return{
                ...state,
                recents: action.recents
            }
        case 'SET_NEW_RELEASES':
            console.log('new releases set');
            return{
                ...state,
                new_releases: action.new_releases,
            }
       case 'SET_IS_PLAYING':
            console.log('set state of is playing');
            return{
                ...state,
                isPlaying: action.isPlaying,
            }
        case 'SET_CURRENTLY_PLAYING_TRACK':
            console.log('currently playing track set');
            return{
                ...state,
                playingrn: action.playingrn,
            }
        case 'SET_SPOTIFY':
            console.log('spotify api is set in reducer');
            return{
                ...state,
                spotifyApi: action.spotifyApi,
            }
        case 'SET_SELECTED_PLAYLIST_FROM_SIDEBAR':
            console.log('currently selected playlist set in reducer');
            return{
                ...state,
                sidebarplaylist: action.sidebarplaylist,
            }
        case 'SET_MY_MUSIC_LIBRARY':
            console.log('music library set in reducer');
            return{
                ...state,
                musiclibrary: action.musiclibrary,
            }
        case 'SET_LIBRARY_ITEM_FROM_SIDEBAR':
            console.log('music library item from sidebar set in reducer');
            return{
                ...state,
                sidebarlibraryitem: action.sidebarlibraryitem,
             }
        case 'SET_SELECTED_SIDEBAR_OPTION':
            console.log('selected sidebar option set in reducer');
            return {
                ...state,
                selectedSidebarOption: action.selectedOption,
            }
        default:
            return state; //original unchanged state
    }

}
export default reducer