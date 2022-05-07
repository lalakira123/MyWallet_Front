import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './../contexts/UserContext';
 
function Login() {
    const [login, setLogin] = useState({email:"", password:""});
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    function logar(e){
        e.preventDefault();
        setCarregando(true);
        const promise = axios.post('https://back-projeto-mywallet.herokuapp.com/sign-in', login);
        promise.then((resposta) => {
            const { data } = resposta;
            setUser({...user, token: data});  
            navigate('/transacoes');   
            setCarregando(false);
        });
        promise.catch((e) => {
            console.log('Não foi possível realizar o login');
            console.log(e.message);
            setCarregando(false);
        });
    }

    return (
        <Container>
            <Titulo>MyWallet</Titulo>
            <Form onSubmit={logar}>
                <Input 
                    placeholder="E-mail" 
                    onChange={(e) => setLogin({...login, email:e.target.value})}
                    value={login.email}
                    type='text'
                    required
                    disabled={carregando}
                />
                <Input 
                    placeholder="Senha"
                    onChange={(e) => setLogin({...login, password:e.target.value})}
                    value={login.password}
                    type='password'
                    required 
                    disabled={carregando}
                />
                <Button disabled={carregando}> Entrar </Button>
            </Form>
            <Link to='/cadastro'>Primeira vez? Cadastra-se!</Link>
        </Container>
    );
}

export default Login;

const Container = styled.main`
    margin-top: 159px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Titulo = styled.h1`
    font-size: 32px;
    font-weight: 400;
    color: #FFFFFF;
    font-family: 'Saira Stencil One', cursive;
    margin-bottom: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 23px;
`

const Input = styled.input`
    width: 326px;
    height: 58px;
    border-radius: 5px;
    border: none;
    margin-bottom: 13px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    padding: 15px;
    &::placeholder {
        color: #000000;
    }
`

const Button = styled.button`
    width: 326px;
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    margin-bottom: 13px;
`