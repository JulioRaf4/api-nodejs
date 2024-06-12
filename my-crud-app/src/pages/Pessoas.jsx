import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PessoaForm from '../components/PessoaForm';
import PessoaList from '../components/PessoaList';

const Pessoas = () => {
    const [pessoas, setPessoas] = useState([]);
    const [selectedPessoa, setSelectedPessoa] = useState(null);

    const fetchPessoas = async () => {
        try {
            const response = await axios.get('http://localhost:3000/pessoas'); // Certifique-se de que a URL está correta
            setPessoas(response.data);
        } catch (error) {
            console.error("Erro ao buscar pessoas:", error);
        }
    };

    useEffect(() => {
        fetchPessoas();
    }, []);

    const editPessoa = (pessoa) => {
        setSelectedPessoa(pessoa);
    };

    const deletePessoa = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/pessoa/${id}`);
            fetchPessoas();
        } catch (error) {
            console.error("Erro ao deletar pessoa:", error);
        }
    };

    return (
        <div>
            <PessoaForm fetchPessoas={fetchPessoas} selectedPessoa={selectedPessoa} />
            <PessoaList pessoas={pessoas} editPessoa={editPessoa} deletePessoa={deletePessoa} />
        </div>
    );
};

export default Pessoas;
