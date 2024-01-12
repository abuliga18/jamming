import React from "react";
let accessToken;
const clientId = 'b8497bec2a4143cbb07356770192f103';
const redirectUri = 'http://localhost:3000/';
const spotifyApiUrl = 'https://api.spotify.com/v1';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check if the access token is in the URL
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);

      // Set the access token to expire at the value for expiration time
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

      // Clear the parameters from the URL
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } 

      const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = spotifyAuthorizeUrl;
    
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    const apiUrl = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    return fetch(apiUrl, {
        method: 'GET',
        headers: { Authorization: `Bearer ${accessToken}`}
    }).then(response => response.json())
    .then(data => {
        if (!data.tracks){
            return [];
        }
        return data.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
        }));
     });
    },

    savePlaylist(playlistName, trackUris) {
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userId;

        if (!playlistName || !trackUris) {
            return;
        }

        return fetch('https://api.spotify.com/v1/me', { headers: headers })
            .then(response => response.json())
            .then(data => {
            userId = data.id; 

            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ name: playlistName })
            })
                .then(response => response.json())
                .then(playlistData => {
                let playlistId = playlistData.id;

                return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({ uris: trackUris })
                });
            });
        });
    }

};

export default Spotify;