import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './../contexts/UserContext';
import MovementContext from './../contexts/MovementContext';

function Edicao() {
    const [atualiza, setAtualiza] = useState({movement:"", description:""});

    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { movement } = useContext(MovementContext);

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    function atualizarMovimentacao(e) {
        e.preventDefault();
        const promise = axios.put(`https://back-projeto-mywallet.herokuapp.com/movements/${movement.id}`, atualiza, config);
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
                {movement.isPlus ? <h2>Editar Entrada</h2> : <h2>Editar Saída</h2> }
            </Header>
            <Form onSubmit={atualizarMovimentacao}>
                <Input 
                    placeholder="Valor"
                    onChange={(e) => setAtualiza({...atualiza, movement: e.target.value})}
                    value={atualiza.movement} 
                    type='number'
                    required
                />
                <Input 
                    placeholder="Descrição"
                    onChange={(e) => setAtualiza({...atualiza, description: e.target.value})}
                    value={atualiza.description}
                    type='text'
                    required 
                />
                {movement.isPlus ? <Button> Atualizar entrada </Button> : <Button> Atualizar saída </Button>}
            </Form>
        </Container>
    );
}

export default Edicao;

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
    padding-right: 132px;
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