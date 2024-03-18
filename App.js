import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './aws-exports';
import SignIn from './SignIn';
import Home from './Home';

Amplify.configure(awsConfig);

function App() {
    return (
        <div>
            {/* Composants de votre application */}
            <SignIn />
        </div>
    );
}

export default App;
