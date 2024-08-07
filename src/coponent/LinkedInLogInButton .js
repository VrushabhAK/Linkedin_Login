  // src/components/LinkedInLoginButton.tsx

  import React from 'react';
  import { useLinkedIn } from 'react-linkedin-login-oauth2';
  import linkedinLogo from 'react-linkedin-login-oauth2/assets/linkedin.png';

  function LinkedInLogInButton() {
    const { linkedInLogin } = useLinkedIn({
      clientId: '868esr1455xo8o', // Replace with your LinkedIn Client ID
      redirectUri: 'http://localhost:3000/linkedin', // Replace with your redirect URI
      onSuccess: (code) => {
        console.log('Authorization Code:', code);
        // Navigate to the callback component with the code
        window.location.href = `/linkedin?code=${code}`;
      },
      onError: (error) => {
        console.log('Error:', error);
      },
      scope: 'r_liteprofile r_emailaddress',
    });

    return (
      <img
        onClick={linkedInLogin}
        src={linkedinLogo}
        alt="Sign in with LinkedIn"
        style={{ maxWidth: '180px', cursor: 'pointer' }}
      />
    );
  };

  export default LinkedInLogInButton;
