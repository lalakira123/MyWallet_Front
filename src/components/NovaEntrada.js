import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NovaEntrada() {
    const [novaEntrada, setNovaEntrada] = useState({movimento:"", descricao:""});

    const navigate = useNavigate();

    function adicionarNovaEntrada(e) {
        e.preventDefault();
        const promise = axios.post('http://localhost:5000',{
            ...novaEntrada,
            isPlus: true    
        });
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
                    onChange={(e) => setNovaEntrada({...novaEntrada, movimento: e.target.value})}
                    value={novaEntrada.movimento} 
                    type='number'
                    required
                />
                <Input 
                    placeholder="Descrição"
                    onChange={(e) => setNovaEntrada({...novaEntrada, descricao: e.target.value})}
                    value={novaEntrada.descricao}
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









