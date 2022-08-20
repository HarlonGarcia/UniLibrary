import { useState } from 'react';

const forms = {
    email: {
        regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Email inválido'
    },
    password: {
        regex: '',
        message: 'Senha inválida',
        shortInput: 'Mínimo: 8 caractéres',
        minLenght: 8
    },
    username: {
        regex: '',
        message: 'Usuário inválido',
        shortInput: 'Mínimo: 3 caractéres',
        minLenght: 3
    }
}

const useForm = (id) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
  
    const validate = (value) => {
        if (!id) return null;

        if (value.length === 0) {
            setError('Campo obrigatório*');
            return false;
        } else if (forms[id].regex && !forms[id].regex.test(value)) {
            setError(forms[id].message);
            return false;
        } else if (forms[id].minLenght && value.length < forms[id].minLenght) {
            setError(forms[id].shortInput)
            return false;
        } else {
            setError('');
            return true;
        }
    }

    const onChange = ({target}) => {
        if (error) validate(target.value);
        setValue(target.value)
    }

    return { 
        value, 
        setValue, 
        error, 
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value)
    }
}

export default useForm