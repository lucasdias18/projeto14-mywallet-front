import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/MyWallet.png"


export default function SignUp() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirm] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const data = { email, name, password, confirmPassword }
        axios.post(`${process.env.REACT_APP_API_URL}/sign-up`, data)
            .then((resp) => {
                navigate('/')
            })
            .catch((err) => alert('As senhas não conferem'))
    }

    return (
        <LoginContainer>
            <Logo src={logo} />
            <Form onSubmit={handleSubmit}>
                <input
                    type='text'
                    id="name" 
                    placeholder="Nome" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    required
                />
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
                <input 
                    type='password' 
                    id="confirmPassword" 
                    placeholder="Confirme a senha" 
                    value={confirmPassword} 
                    onChange={e => setConfirm(e.target.value)} 
                    required 
                />
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to={`/`}>
                <a>Já tem uma conta? Entre agora!</a>
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