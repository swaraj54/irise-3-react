import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';

const GoogleSSOLogin = () => {

    function Success(res) {
        console.log(res, "success")
    }
    function Error(res) {
        console.log(res, "failure")
    }

    return (
        <div>
            <GoogleLogin
                clientId="1059100419316-tsn78pheacdvc6l9fl2oqpmqed50gpfe.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={Success}
                onFailure={Error}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    );
};

export default GoogleSSOLogin;
