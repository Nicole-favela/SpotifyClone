

export default function loginInfo(clientID){
    const authEndPoint = "https://accounts.spotify.com/authorize";
    //app's redirect uri

    const redirectURI = "http://localhost:3000/";


    //new scopes for this app:
    const scopes=[
        "streaming",
        "user-read-email",
        "user-read-private",
        "user-library-read",
        "user-library-modify",
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-recently-played",
    ]

  
    const loginURL = `${authEndPoint}?client_id=${clientID.replace(/['"]+/g, '')}&response_type=code&redirect_uri=${redirectURI}&scope=${scopes.join("%20")}`;
    return loginURL
}

