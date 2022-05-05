import styled from 'styled-components';

function Movimentacoes(props){
    const { movements } = props;

    return (
        <>
            <Container>
                {movements.map((move) => {
                    const { date, movement, description, isPlus } = move;
                    return(
                        <Info>
                            <InfoDescription>
                                <Data>{date}</Data>
                                <Descricao>{description}</Descricao>
                            </InfoDescription>
                            <InfoMovement isPlus={isPlus}>{movement}</InfoMovement>
                        </Info>
                    );
                })}
            </Container>
            <Saldo> 
                <TextSaldo>SALDO</TextSaldo>
                <p>2849,96</p>
            </Saldo>
        </>
    ); 
}

export default Movimentacoes;

const Container = styled.div`
    padding-top: 23px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 10px;
    font-size: 16px;
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
`
