import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Bem-vindo ao Gerenciador de Pessoas</h1>
            <Link to="/pessoas">Gerenciar Pessoas</Link>
        </div>
    );
};

export default Home;
