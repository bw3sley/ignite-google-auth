import { GoogleLogo } from "phosphor-react";

import "./styles.scss";

export function SignIn() {
    return (
        <div className="container">
            <h1>Acesse sua conta</h1>

            <span>
                Utilização autenticação social, por exemplo, autenticação com o Google vocÊ <br />
                facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
            </span>

            <button 
                type="button" 
                className="button"
            >
                <GoogleLogo size={24}/>
                Entrar com Google
            </button>
        </div>
    )
}