import { useState } from "react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

import { auth } from "../../services/firebase";

import { GoogleLogo } from "phosphor-react";

import "./styles.scss";

export function SignIn() {
    const [user, setUser] = useState<User>({} as User)

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then(result => setUser(result.user))
            .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <div className="user">
                {
                    user.photoURL && <img src={user.photoURL} alt="" />
                }

                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>
            
            <h1>Acesse sua conta</h1>

            <span>
                Utilização autenticação social, por exemplo, autenticação com o Google vocÊ <br />
                facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
            </span>

            <button 
                type="button" 
                className="button"

                onClick={handleGoogleSignIn}
            >
                <GoogleLogo size={24}/>
                Entrar com Google
            </button>
        </div>
    )
}