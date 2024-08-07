// src/components/LinkedInCallback.tsx

import React, { useEffect } from 'react';
import axios from 'axios';

function LinkedInCallback ()  {
  useEffect(() => {
    const exchangeCodeForToken = async (code) => {
      try {
        const response = await axios.post(
          'https://www.linkedin.com/oauth/v2/accessToken',
          new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: 'http://localhost:3000/linkedin', // Ensure this matches your app's redirect URI
            client_id: '868esr1455xo8o', // Replace with your LinkedIn Client ID
            client_secret: 'bEb6MgGsJjUvgwGk', // Replace with your LinkedIn Client Secret
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          }
        );

        const { access_token } = response.data;
        console.log('Access Token:', access_token);
        // Use the access token to fetch user data or redirect the user
      } catch (error) {
        console.error('Error exchanging code for token:', error);
      }
    };

    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      exchangeCodeForToken(code);
    }
  }, []);

  return <h1>LinkedIn Callback Page</h1>;
};

export default LinkedInCallback;
