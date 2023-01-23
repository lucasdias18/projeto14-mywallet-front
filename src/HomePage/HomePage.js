import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../context";

export default function HomePage() {
    const { token } = useContext(UserContext)
    // console.log(token)
    const [saidas, setSaidas] = useState(undefined)
    const [entradas, setEntradas] = useState(undefined)
    const [movimento, setMovimento] = useState(undefined)
    const [user, setUser] = useState(undefined)


    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/home`, {headers: {Authorization:`Bearer ${token}`}})
            .then((resp) => {
                setMovimento(resp.data)
            })
            .catch((resp) => console.log(resp.response.data))

        // axios.get(`${process.env.REACT_APP_API_URL}/saidas`, {headers: {Authorization:`Bearer ${token}`}})
        //     .then((resp) => {
        //         setSaidas(resp.data)
        //         setMovimento([...saidas, ...entradas])
        //     })
        //     .catch((resp) => console.log(resp.response.data))

            axios.get(`${process.env.REACT_APP_API_URL}/user`, {headers: {Authorization:`Bearer ${token}`}})
                .then((res) => {
                    setUser(res.data)
                })
                .catch((err) => console.log(err.data))
            
            

    }, []);
    if(user !== undefined) {
        return (
            <Container>
                <Topo>
                    <Titulo>Olá, { user.name }</Titulo>
                    {/* <Botao></Botao> */}
                </Topo>
                
                <Registros>
                    {
                        movimento===undefined? <div>Não há registros de
                        entrada ou saída</div> : movimento.map((p) => {
                            return (
                                <Registro description={p.description} valueS={p.valueS} valueE={p.valueE} day={p.day} />
                            )
                        })
                    }
                </Registros>
                <ContainerActions>
                    <NovaEntrada></NovaEntrada>
                    <NovaSaida></NovaSaida>
                </ContainerActions>
            </Container>
        )
    }
}

function Registro(props) {
    return (
            <ContainerRegistro>
                <Dia>{props.day}</Dia>
                <Descricao>{props.description}</Descricao>
                <ValorS>{props.valueS}</ValorS>
                <ValorE>{props.valueE}</ValorE>
            </ContainerRegistro>
    )
}

const Container = styled.div`
padding: 25px 24px 0px 24px;
`

const Topo = styled.div``

const Titulo = styled.h1`
font-family: Raleway;
font-size: 26px;
font-weight: 700;
line-height: 31px;
color: #FFFFFF;
margin-bottom: 22px;
`

const Registros = styled.div`
height: 446px;
border-radius: 5px;
background-color: #FFFFFF;
`

const ContainerRegistro = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 12px;
`

const Descricao = styled.p`
font-family: Raleway;
font-size: 16px;
font-weight: 400;
line-height: 19px;
color: #000000;
// text-align: left;
`

const ValorE = styled.p`
font-family: Raleway;
font-size: 16px;
font-weight: 400;
line-height: 19px;
color: #03AC00;
`

const ValorS = styled.p`
font-family: Raleway;
font-size: 16px;
font-weight: 400;
line-height: 19px;
color: #C70000;
`

const Dia = styled.p`
font-family: Raleway;
font-size: 16px;
font-weight: 400;
line-height: 19px;
color: #C6C6C6;
`

const ContainerActions = styled.div`
display: flex;
justify-content: space-between;
margin-top: 13px;
margin-bottom: 16px;
`

const NovaEntrada = styled.button`
height: 114px;
width: 155px;
border-radius: 5px;
background-color: #A328D6;
`

const NovaSaida = styled.button`
height: 114px;
width: 155px;
border-radius: 5px;
background-color: #A328D6;
`