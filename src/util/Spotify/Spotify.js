import React from "react";
let accessToken;
const clientId = 'b8497bec2a4143cbb07356770192f103';
const redirectURI = 'http://localhost:3000/';

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
      accessToken.expiresAt = Date.now() + (expiresIn * 1000);

      // Clear the parameters from the URL
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    } else if (!accessToken && !accessToken.expiresAt || accessToken.expiresAt < Date.now()) {
      const spotifyAuthorizeUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = spotifyAuthorizeUrl;
    }
  }
};

export default Spotify;