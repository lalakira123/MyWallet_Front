import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

function Cadastro() {
    const [cadastro, setCadastro] = useState({name:"", email:"", password:"", passwordConfirmation:""});

    const navigate = useNavigate();

    function cadastrar(e){
        e.preventDefault();
        const promise = axios.post('https://back-projeto-mywallet.herokuapp.com/sign-up', cadastro);
        promise.then((response) => {
            console.log(response.data.status);
            navigate('/');
        });
        promise.catch((e) => {
            console.log('Não foi possível cadastrar o usuário');
            console.log(e.message);
        });
    }

    return (
        <Container>
            <Titulo>MyWallet</Titulo>
            <Form onSubmit={cadastrar}>
                <Input 
                    placeholder="Nome"
                    onChange={(e) => setCadastro({...cadastro, name: e.target.value})}
                    value={cadastro.name}
                    type='text'
                    required 
                />
                <Input 
                    placeholder="E-mail"
                    onChange={(e) => setCadastro({...cadastro, email: e.target.value})}
                    value={cadastro.email}
                    type='email'
                    required 
                />
                <Input 
                    placeholder="Senha"
                    onChange={(e) => setCadastro({...cadastro, password: e.target.value})}
                    value={cadastro.password}
                    type='password'
                    required 
                />
                <Input 
                    placeholder="Confirme a senha"
                    onChange={(e) => setCadastro({...cadastro, passwordConfirmation: e.target.value})} 
                    value={cadastro.passwordConfirmation}
                    type='password'
                    required
                />
                <Button> Cadastrar </Button>
            </Form>
            <Link to='/'>Já tem uma conta? Entre agora!</Link>
        </Container>
    );
}

export default Cadastro;

const Container = styled.main`
    margin-top: 95px;
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