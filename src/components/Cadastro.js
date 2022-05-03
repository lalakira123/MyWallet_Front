import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Cadastro() {
    return (
        <Container>
            <Titulo>MyWallet</Titulo>
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" />
                <Input placeholder="Confirme a senha" />
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