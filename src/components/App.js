import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Login from './Login';
import Cadastro from './Cadastro';
import TelaPrincipal from './TelaPrincipal';
import NovaEntrada from './NovaEntrada';
import NovaSaida from './NovaSaida';

import UserContext from './../contexts/UserContext';

import './../assets/css/reset.css';
import './../assets/css/style.css';

function App() {
    const [user, setUser] = useState({name:"", token:""});

    return(
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/transacoes' element={<TelaPrincipal />} />
                    <Route path='/entrada' element={<NovaEntrada />} />
                    <Route path='/saida' element={<NovaSaida />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;