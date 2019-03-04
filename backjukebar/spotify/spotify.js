var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({

  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: "http://localhost:3000/"
}

);

spotifyApi.setAccessToken('BQCMbjL2ZNLO_tdqMP9A1vJ2AqVnSoQq_yyI9pQoizlzO43hEe8YxDmfmlsMWYA0fEZUS2B1p9Kd373om2IGkyJaWt2SpLtKzo5Hp9674Jd4sUtFkHmOV9BA6JiD8UVvHo__DFAkIo3el-iza9kn7SSqBSNe8bHJ0yg')

spotifyApi.getArtist('David Bowie')
  .then(function(data) {
    console.log('Artist information', data.body);
  }, function(err) {
    console.error(err);
  });




  
//   api = new SpotifyWebApi({
//   clientId: process.env.CLIENT_ID,
//   clientSecret:process.env.CLIENT_SECRET,
//   redirectUri:"http://localhost:3000/"
// });

//  api.clientCredentialsGrant()
//     .then( data => {
//       api.setAccessToken(data.body['access_token']);
//     })
//     .catch(error => {
//       console.log('Something went wrong when retrieving an access token', error);
//     })

//   this.api = api;


// Spotify.prototype.createList = function(listName)  {

//   //  Permisos que acepta el usuario
//   var scopes = ['user-read-recently-played',
//   'user-top-read',
//   'user-library-modify',
//   'user-library-read',
//   'playlist-read-private',
//   'playlist-modify-public',
//   'playlist-modify-private',
//   'playlist-read-collaborative',
//   'user-read-email',
//   'user-read-birthdate',
//   'user-read-private',
//   'user-read-playback-state',
//   'user-modify-playback-state',
//   'user-read-currently-playing',
//   'app-remote-control',
//   'streaming',
//   'user-follow-read',
//   'user-follow-modify',]
//   state = 'some-state-of-my-choice'; //No sé qué es


// // Create the authorization URL
// var authorizeURL = this.api.createAuthorizeURL(scopes, state);
// console.log('----------------------------------')
// console.log(authorizeURL);
// console.log('----------------------------------')
// console.log(window)
//   // api.getUserPlaylists('misllaagu')
//   // .then(function(data) {
//   //   console.log('Retrieved playlists', data.body);
//   // },function(err) {
//   //   console.log('Something went wrong!', err);
//   // });

//   const code = "AQDzquQYjTM29iC6MUI010SaanBHnDZItEE3BZ9kBBPnzdWNFiwhbGDtN9aAYyXgeUNTwqT69tjHwjHrs-0a9FUcdwQ4nkazLKVBbAzkGZ9_oevZHcvIPAZBgcflY8KMf94sP3uQMzGNh1fsSka7neJPuZbnHahmhJuddWaSF9wmiA-TESVGaCfVW-k2M1rZBbsZlsMyixQ7dbkhBterN2Xs35ZTLS4mk4nG1Y4gOiYa7YCyqNYD_pctjyNQaaJA-R2ECloZD7O5ZOtJZULYtaCvbbKbQZy35txk-7VfL7CwnRXon214_RIeLnY2TryC1wCVic3YrX-ItA4B-h5xU0G5FUVPFbiOyt1yCdH0siyOvHgVDfS3LhC3v4NcXei14rNdvXl5HqIkefrNWsAVAi2xYNdcvuE5Idg5vScIwo1uIr9qYDMVtx_R93i1x8VTXJAGK0CoGO0jYcqErShzH30eMCY7Ocnfc-vfiafkvErsPk8dU9XEzQy9DNEQ2L6G7LLV_ky7fBGyTZ-DcjHltDVvyEot4AsNi7EPvO6UZ_6tnebwMPrsE9RuGLGtK9NkZyiM0fXR7okWF1UBL5tZeN9DfsZLyJG3z5bTTZm9kG3NY0KM3NV50YvJNzvkEk69S2Cf1yXbWalCCRPdfIZ_8iXuQrfPlVxF9mXX0amvJ2Ty_IajjpU7wJSfvtwsv0naLZ31fJw3"
//   return this.api.authorizationCodeGrant(code).then(
//     function(data) {
//       console.log('The token expires in ' + data.body['expires_in']);
//       console.log('The access token is ' + data.body['access_token']);
//       console.log('The refresh token is ' + data.body['refresh_token']);
  
//       // Set the access token on the API object to use it in later calls
//       this.api.setAccessToken(data.body['access_token']);
//       this.api.setRefreshToken(data.body['refresh_token']);

//       return this.api.createPlaylist('misllaagu',listName,{ 'public' : true })
//       .then(data => data)
//       .catch(error => {
//         console.log("Error creating playlist ")
//         throw error
//       });
//     },
//     function(err) {
//       console.log('Something went wrong!', err);
//     }
//   );






//module.exports = Spotify;





