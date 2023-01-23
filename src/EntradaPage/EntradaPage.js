import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import UserContext from "../context"

export default function EntradaPage() {

    const [valor, setValor] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    

    function novaEntrada(e) {
        e.preventDefault()
        const data = { valueE: valor, description }
        axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, data, {headers: {Authorization:`Bearer ${token}`}})
            .then(resp => navigate('/home'))
            .catch((err) => console.log(err.response.data))
    }

    return (
        <Form onSubmit={novaEntrada}>
            <input
                type='text'
                id="value" 
                placeholder="Valor" 
                value={valor} 
                onChange={e => setValor(e.target.value)} 
                required
            />
            <input
                type='text'
                id="description" 
                placeholder="Descrição" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                required
            />
            <button type="submit">Salvar entrada</button>
        </Form>
    )
}

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
// align-items: center;
margin-top: 100px;
padding: 0 24px;
gap: 13px;
`