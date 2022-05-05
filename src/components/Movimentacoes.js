import { useState, useEffect } from 'react';
import styled from 'styled-components';

function Movimentacoes(props){
    const { movements } = props;

    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
        let soma = 0;
        movements.forEach((move) => {
            const { movement, isPlus } = move;
            if(isPlus) soma += parseFloat(movement);
            else soma -= parseFloat(movement);
        })
        setSaldo(soma);
    }, [])

    return (
        <>
            <Container>
                {movements.map((move) => {
                    const { date, movement, description, isPlus } = move;
                    return(
                        <Info key={description}>
                            <InfoDescription>
                                <Data>{date}</Data>
                                <Descricao>{description}</Descricao>
                            </InfoDescription>
                            <InfoMovement isPlus={isPlus}>{parseFloat(movement).toFixed(2)}</InfoMovement>
                        </Info>
                    );
                })}
            </Container>
            <Saldo> 
                <TextSaldo>SALDO</TextSaldo>
                <ContSaldo isPositive={ saldo > 0 ? true : false }>{parseFloat(saldo).toFixed(2)}</ContSaldo>
            </Saldo>
        </>
    ); 
}

export default Movimentacoes;

const Container = styled.div`
    padding-top: 23px;
    padding-left: 15px;
    padding-right: 15px;
    height: 400px;
    font-size: 16px;
    overflow-y: scroll;
`

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

const Saldo = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    left: 15px;
    right: 15px;
`

const TextSaldo = styled.p`
    color: #000000;
    font-size: 17px;
    font-weight: 700;
`

const ContSaldo = styled.p`
    font-size: 17px;
    font-weight: 400;
    color: ${props => props.isPositive ? '#03AC00' : '#C70000'}
`
