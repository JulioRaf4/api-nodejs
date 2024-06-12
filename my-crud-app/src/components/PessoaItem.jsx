import React from 'react';

const PessoaItem = ({ pessoa, editPessoa, deletePessoa }) => {
    return (
        <li>
            {pessoa.nome} - {pessoa.idade} anos
            <button onClick={() => editPessoa(pessoa)}>Editar</button>
            <button onClick={() => deletePessoa(pessoa.id)}>Excluir</button>
        </li>
    );
};

export default PessoaItem;
