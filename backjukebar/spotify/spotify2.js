var SpotifyWebApi = require('spotify-web-api-node');

function Spotify2(fullUrl) {
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
// console.log(fullUrl)
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
// let URL="";
// if(fullUrl && fullUrl.includes('localhost')){
//     URL="http://localhost:3000/login-spotify";
// }else{
//     URL="https://juke-bar0119.herokuapp.com/login-spotify";
// }
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
// console.log(fullUrl)
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')

  this.spotifyApi = new SpotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri:"/login-spotify"
  });

  
}

Spotify2.prototype.setAuthorizationCodeGrant = function(code) {
    return this.spotifyApi.authorizationCodeGrant(code)
        .then( data => {
            var result = {
                expires_in: data.body['expires_in'],
                access_token:data.body['access_token'],
                refresh_token:data.body['refresh_token']
            };

            console.log('The token expires in ' + result.expires_in);
            console.log('-----------------ACCESS TOKEN MI ARMA---------------------------')
            console.log('The access token is ' + result.access_token);
            console.log('------------------------------------------------------------')
            console.log('The refresh token is ' + result.refresh_token);

            // Set the access token on the API object to use it in later calls
            this.spotifyApi.setAccessToken(result.access_token);
            this.spotifyApi.setRefreshToken(result.refresh_token);

            return result;
        })
        .catch(err =>  {
            console.log('Something went wrong!', err);
        });
    }

Spotify2.prototype.createAuthorizeURL = function(state) {
   const scopes = ['user-read-recently-played',
  'user-top-read',
  'user-library-modify',
  'user-library-read',
  'playlist-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'user-read-email',
  'user-read-birthdate',
  'user-read-private',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'app-remote-control',
  'streaming',
  'user-follow-read',
  'user-follow-modify',]

  return this.spotifyApi.createAuthorizeURL(scopes, state);
}

Spotify2.prototype.getUserId = function(token) {
    this.spotifyApi.setAccessToken(token);

    return this.spotifyApi.getMe()
    .then(me => {
        console.log("Spotify user:" + JSON.stringify(me));
        return me.body.id;
    }) 
    .catch(error => {
        console.log("Error getting current user ")
        throw error
    })
}

Spotify2.prototype.createPlaylist= function(token, name, userId) {
    this.spotifyApi.setAccessToken(token);

    console.log("El usuario es "+userId);
    return  this.spotifyApi.createPlaylist(userId,name,{ 'public' : true})
    .then(data => data.body)
    .catch(error => {
      console.log("Error creating playlist ")
      throw error
    });
}

Spotify2.prototype.searchTrack=function(token, track){
    this.spotifyApi.setAccessToken(token);

    return this.spotifyApi.searchTracks(track)
    .then(data => data.body)
    .catch(error => {
        console.log("Error searching track")
        throw error;
    })
}

Spotify2.prototype.addTrack= function(token, spotifytrackId, spotifyListId) {
    this.spotifyApi.setAccessToken(token);

    let trackArray = ["spotify:track:"+spotifytrackId] //Le tengo que pasar un array.

    console.log("Voy a añadir: " + spotifytrackId + " a lista " +  spotifyListId)
    return this.spotifyApi.addTracksToPlaylist(spotifyListId,trackArray)
        .then(data => data.body)
        .catch(error => {
            console.log("Error adding track")
            throw error;
        })
}


module.exports = Spotify2;