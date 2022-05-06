import { useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from './../contexts/UserContext';

function Movimentacao(props) {
    const { date, movement, description, isPlus, id, setStatus, status } = props;

    const { user } = useContext(UserContext);
    const config = {
        headers: { Authorization: `Bearer ${user.token}`}
    }

    function deletarMovimentacao(){
        if(window.confirm('Deseja realmente deletar essa movimentação?')){
            const promise = axios.delete(`http://localhost:5000/movements/${id}`, config);
            promise.then(() => {
                console.log('Sucesso!');
                setStatus(status + 1);
            });
            promise.catch((e) => {
                console.log(e.data);
            })
        }
    }

    return(
        <Info key={description}>
            <InfoDescription>
                <Data>{date}</Data>
                <Descricao>{description}</Descricao>
            </InfoDescription>
            <InfoDescription>
                <InfoMovement isPlus={isPlus}>{parseFloat(movement).toFixed(2)}</InfoMovement>
                <Button onClick={deletarMovimentacao}> x </Button>
            </InfoDescription>
        </Info>
    );
}

export default Movimentacao;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const InfoDescription = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InfoMovement = styled.p`
    color: ${props => props.isPlus ? '#03AC00' : '#C70000'};
`

const Data = styled.p`
    color: #C6C6C6;
    margin-right: 5px;
`

const Descricao = styled.p`
    color: #000000;
`

const Button = styled.p`
    font-size: 16px;
    color: #C6C6C6;
    margin-left: 11px;
`