import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/MyWallet.png"
import UserContext from "../context"


export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {guardarToken} = useContext(UserContext)

    function login(e) {
        e.preventDefault()
        const data = { email, password }
        axios.post(`${process.env.REACT_APP_API_URL}/login`, data)
            .then(resp)
            .catch((err) => console.log(err))

            function resp(res) {
                guardarToken(res.data)
                navigate('/home')
            }
    }

    return (
        <LoginContainer>
            <Logo src={logo} />
            <Form onSubmit={login}>
                <input
                    type='email'
                    id="email" 
                    placeholder="E-mail" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    required
                />
                <input 
                    type='password' 
                    id="password" 
                    placeholder="Senha" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Entrar</button>
            </Form>
            <Link to={`/cadastro`}>
                <a>Primeira vez? Cadastre-se!</a>
            </Link>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
min-height: 100vh;
padding: 0 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 28px;
`
const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 13px;
margin-bottom: 12px;
`

const Logo = styled.img`
width: 147px;
`