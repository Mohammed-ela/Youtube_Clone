import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            const user = await Auth.signIn(username, password);
            console.log('Connexion réussie :', user);
        } catch (error) {
            console.log('Erreur de connexion :', error);
        }
    };

    return (
        <div>
            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Nom d'utilisateur" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
            <button onClick={signIn}>Connexion</button>
        </div>
    );
}

export default SignIn;
