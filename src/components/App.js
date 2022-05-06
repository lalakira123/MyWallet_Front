import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Login from './Login';
import Cadastro from './Cadastro';
import TelaPrincipal from './TelaPrincipal';
import NovaEntrada from './NovaEntrada';
import NovaSaida from './NovaSaida';
import Edicao from './Edicao';

import UserContext from './../contexts/UserContext';
import MovementContext from './../contexts/MovementContext';

import './../assets/css/reset.css';
import './../assets/css/style.css';

function App() {
    const [user, setUser] = useState({name:"", token:""});
    const [movement, setMovement] = useState({isPlus:"", id:""});

    return(
        <MovementContext.Provider value={{movement, setMovement}}>
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/cadastro' element={<Cadastro />} />
                    <Route path='/transacoes' element={<TelaPrincipal />} />
                    <Route path='/entrada' element={<NovaEntrada />} />
                    <Route path='/saida' element={<NovaSaida />} />
                    <Route path='/edicao' element={<Edicao />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </MovementContext.Provider>
    );
}

export default App;