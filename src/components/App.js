import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Login';
import Cadastro from './Cadastro';
import TelaPrincipal from './TelaPrincipal';
import NovaEntrada from './NovaEntrada';
import NovaSaida from './NovaSaida';

import './../assets/css/reset.css';
import './../assets/css/style.css';

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/transacoes' element={<TelaPrincipal />} />
                <Route path='/entrada' element={<NovaEntrada />} />
                <Route path='/saida' element={<NovaSaida />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;