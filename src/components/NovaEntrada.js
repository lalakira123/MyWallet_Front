import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NovaEntrada() {
    const navigate = useNavigate();

    function adicionarNovaEntrada(e) {
        e.preventDefault();
        navigate('/transacoes');
    }

    return(
        <Container>
            <Header>
                <h2>Nova entrada</h2>
            </Header>
            <Form onSubmit={adicionarNovaEntrada}>
                <Input placeholder="Valor" />
                <Input placeholder="Descrição" />
                <Button> Salvar entrada </Button>
            </Form>
        </Container>
    );
}

export default NovaEntrada;

const Container = styled.div`
    padding: 25px;
`

const Header = styled.header`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 40px;
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









