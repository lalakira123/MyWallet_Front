import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Movimentacoes from './Movimentacoes.js';

import Saida from './../assets/img/saida.png';
import Adicionar from './../assets/img/adicionar.png';
import Subtrair from './../assets/img/subtrair.png';

import UserContext from './../contexts/UserContext';

function TelaPrincipal() {
    const [ movements, setMovements ] = useState([]);
    const [ status, setStatus ] = useState(0);

    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    }

    useEffect(() => {
        const promise = axios.get('http://localhost:5000/movements', config);
        promise.then((resposta) => {
            const { data } = resposta;
            const { name, movements } = data;
            setUser({...user, name});
            setMovements(movements);
        });
        promise.catch((e) => {
            console.log('Não foi possível pegar as transacoes');
            console.log(e.message);
        }); 
    },[status]);

    function deslogar() {
        setUser({user:"", token:""});
        navigate('/');
    }

    return(
        <Container>
            <Header>
                <h2>Olá, {user.name}</h2>
                <img src={Saida} alt='sair' onClick={deslogar}/>
            </Header>
            <Main>
                {
                    movements.length !== 0 ? 
                    <Movimentacoes movements={movements} status={status} setStatus={setStatus}/>
                    : <Mensagem>Não há registros de entrada ou saída</Mensagem>
                }
            </Main>
            <Section>
                <Botao onClick={() => navigate('/entrada')}>
                    <Imagem src={Adicionar} alt='adicionar'/>
                    <Texto>Nova</Texto>
                    <p>entrada</p>
                </Botao>
                <Botao onClick={() => navigate('/saida')}>
                    <Imagem src={Subtrair} alt='subtrair'/>
                    <Texto>Nova</Texto>
                    <p>saída</p>
                </Botao>
            </Section>
        </Container>
    );
}

export default TelaPrincipal;

const Container = styled.div`
    padding: 25px;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 22px;
`

const Main = styled.main`
    height: 446px;
    margin-bottom: 13px;
    background-color: #FFFFFF;
    border-radius: 5px;
    position: relative;
`

const Mensagem = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #868686;
    padding-top: 200px;
    padding-left: 40px;
    padding-right: 40px;
    text-align: center;
`

const Section = styled.section`
    display: flex;
    justify-content: space-between;
`

const Botao = styled.div`
    background-color: #A328D6;
    width: 155px;
    height: 110px;
    border-radius: 5px;
    padding: 10px;
    font-size: 17px;
    font-weight: 700;
    color: #FFFFFF;
`

const Imagem = styled.img`
    margin-bottom: 27px;
`

const Texto = styled.p`
    margin-bottom: 3px;
`