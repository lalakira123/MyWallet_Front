import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './../contexts/UserContext';

function NovaEntrada() {
    const [novaEntrada, setNovaEntrada] = useState({movement:"", description:""});

    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    function adicionarNovaEntrada(e) {
        e.preventDefault();
        const promise = axios.post('https://back-projeto-mywallet.herokuapp.com/movements',{
            ...novaEntrada,
            isPlus: true    
        }, config);
        promise.then(() => {
            navigate('/transacoes');
        });
        promise.catch((e) => {
            console.log('Não foi possível enviar os dados');
            console.log(e);
        });
    }

    return(
        <Container>
            <Header>
                <h2>Nova entrada</h2>
            </Header>
            <Form onSubmit={adicionarNovaEntrada}>
                <Input 
                    placeholder="Valor"
                    onChange={(e) => setNovaEntrada({...novaEntrada, movement: e.target.value})}
                    value={novaEntrada.movement} 
                    type='number'
                    required
                />
                <Input 
                    placeholder="Descrição"
                    onChange={(e) => setNovaEntrada({...novaEntrada, description: e.target.value})}
                    value={novaEntrada.description}
                    type='text'
                    required 
                />
                <Button> Salvar entrada </Button>
            </Form>
        </Container>
    );
}

export default NovaEntrada;

const Container = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Header = styled.header`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 40px;
    padding-right: 142px;
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









