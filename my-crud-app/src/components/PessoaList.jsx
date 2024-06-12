import React from 'react';
import PessoaItem from './PessoaItem';

const PessoaList = ({ pessoas, editPessoa, deletePessoa }) => {
    return (
        <ul>
            {pessoas.map((pessoa) => (
                <PessoaItem
                    key={pessoa.id}
                    pessoa={pessoa}
                    editPessoa={editPessoa}
                    deletePessoa={deletePessoa}
                />
            ))}
        </ul>
    );
};

export default PessoaList;
