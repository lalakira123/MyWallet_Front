import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './../contexts/UserContext';

function NovaSaida() {
    const [novaSaida, setNovaSaida] = useState({movement:"", description:""})
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    }

    function adicionarNovaSaida(e) {
        e.preventDefault();
        setCarregando(true);
        const promise = axios.post('https://back-projeto-mywallet.herokuapp.com/movements',{
            ...novaSaida,
            isPlus: false
        }, config);
        promise.then(() => {
            navigate('/transacoes');
            setCarregando(false);
        })
        promise.catch((e) => {
            console.log('Não foi possível adicionar transacao');
            console.log(e);
            setCarregando(false);
        })
    }

    return(
        <Container>
            <Header>
                <h2>Nova saída</h2>
            </Header>
            <Form onSubmit={adicionarNovaSaida}>
                <Input 
                    placeholder="Valor"
                    onChange={(e) => setNovaSaida({...novaSaida, movement: e.target.value})}
                    value={novaSaida.movement}
                    type='number'
                    required 
                    disabled={carregando}
                />
                <Input 
                    placeholder="Descrição"
                    onChange={(e) => setNovaSaida({...novaSaida, description: e.target.value})}
                    value={novaSaida.description}
                    type='text'
                    required 
                    disabled={carregando}
                />
                <Button disabled={carregando}> Salvar saída </Button>
            </Form>
        </Container>
    );
}

export default NovaSaida;

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
    padding-right: 172px;
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