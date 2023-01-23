import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserContext from "../context";
import ent from "../assets/Mais.png"
import sai from "../assets/Menos.png"
import logout from "../assets/Logout.png"
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const { token } = useContext(UserContext)
    const [saidas, setSaidas] = useState(undefined)
    const [entradas, setEntradas] = useState(undefined)
    const [movimento, setMovimento] = useState(undefined)
    const [user, setUser] = useState(undefined)
    const navigate = useNavigate()


    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/home`, {headers: {Authorization:`Bearer ${token}`}})
            .then((resp) => {
                setMovimento(resp.data)
            })
            .catch((resp) => console.log(resp.response.data))

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
                    <img src={logout} />
                </Topo>
                
                <Registros>
                    {
                        <>
                            {movimento===undefined? <div>Não há registros de
                            entrada ou saída</div> : movimento.map((p) => {
                                return (
                                    <>
                                        <Registro description={p.description} valueS={p.valueS} valueE={p.valueE} day={p.day} total={p.total} />
                                    </>
                                )
                                
                            })}
                            {/* <Saldo>Saldo {movimento.total}</Saldo> */}
                        </>
                    }
                    <SaldoTexto>Saldo</SaldoTexto>
                </Registros>
                <ContainerActions>
                    <NovaEntrada onClick={() => navigate('/nova-entrada')}>
                        <img src={ent} />
                        <Texto>Nova entrada</Texto>
                    </NovaEntrada>
                    <NovaSaida onClick={() => navigate('/nova-saida')}>
                        <img src={sai} />
                        <Texto>Nova saída</Texto>
                    </NovaSaida>
                </ContainerActions>
            </Container>
        )
    }
}

function Registro(props) {
    return (
            <>
                <ContainerRegistro>
                    <Dia>{props.day}</Dia>
                    <Descricao>{props.description}</Descricao>
                    <ValorS>{props.valueS}</ValorS>
                    <ValorE>{props.valueE}</ValorE>
                </ContainerRegistro>
                <Saldo>{props.total}</Saldo>
            </>
    )
}

const Saldo = styled.h1`
// color: ${props => props.total>=0 ? '#03AC00' : '#C70000'};
color: blue;
// position: absolute;
// bottom: 10px;
// right: 24px;
margin-top: 20px;
text-align: center;
`

const SaldoTexto = styled.h1`
color: #00000;
text-align: center;
// position: absolute;
// bottom: 10px;
// left: 24px;
`

const Container = styled.div`
padding: 25px 24px 0px 24px;
`

const Topo = styled.div`
display: flex;
justify-content: space-between;
`

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
position: relative;
overflow: scroll;
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

const Texto = styled.h1``