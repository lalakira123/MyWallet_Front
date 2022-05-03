import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Saida from './../assets/img/saida.png';
import Adicionar from './../assets/img/adicionar.png';
import Subtrair from './../assets/img/subtrair.png';

function TelaPrincipal() {
    const navigate = useNavigate();

    function adicionarEntrada(){
        navigate('/entrada');
    }

    function adicionarSaida(){
        navigate('/saida')
    }

    return(
        <Container>
            <Header>
                <h2>Olá, Fulano</h2>
                <img src={Saida} alt='sair'/>
            </Header>
            <Main>
                <p>Não há registros de entrada ou saída</p>
            </Main>
            <Section>
                <Botao onClick={adicionarEntrada}>
                    <Imagem src={Adicionar} alt='adicionar'/>
                    <Texto>Nova</Texto>
                    <p>entrada</p>
                </Botao>
                <Botao onClick={adicionarSaida}>
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
`

const Section = styled.section`
    display: flex;
    justify-content: space-between;
`

const Botao = styled.div`
    background-color: #A328D6;
    width: 155px;
    height: 114px;
    border-radius: 5px;
    padding: 10px;
    font-size: 17px;
    font-weight: 700;
    color: #FFFFFF;
`

const Imagem = styled.img`
    margin-bottom: 30px;
`

const Texto = styled.p`
    margin-bottom: 3px;
`