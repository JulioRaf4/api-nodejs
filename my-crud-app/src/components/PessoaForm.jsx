import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PessoaForm = ({ fetchPessoas, selectedPessoa }) => {
    const [formData, setFormData] = useState({ nome: '', idade: '' });

    useEffect(() => {
        if (selectedPessoa) {
            setFormData(selectedPessoa);
        } else {
            setFormData({ nome: '', idade: '' });
        }
    }, [selectedPessoa]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedPessoa) {
                await axios.put(`http://localhost:3000/pessoa`, formData);
            } else {
                await axios.post(`http://localhost:3000/pessoa`, formData);
            }
            fetchPessoas();
            setFormData({ nome: '', idade: '' });
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Nome"
                required
            />
            <input
                type="number"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                placeholder="Idade"
                required
            />
            <button type="submit">{selectedPessoa ? 'Atualizar' : 'Adicionar'}</button>
        </form>
    );
};

export default PessoaForm;
