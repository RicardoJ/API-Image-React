import React, { useState } from 'react';
import Error from './Error';


const Form = ({setSearch}) => {
    const [term, setTerm] = useState('');
    const[error, setError] = useState(false);
    const  imageSearch = e =>{
        e.preventDefault();
        if (term.trim()=== '') {
            setError(true);
            return;
        }
        setError(false);
        setSearch(term);
    }
    return (
        <form
        onSubmit = {imageSearch}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscador de imagen"
                        onChange = {e => setTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {error ? <Error messageError = "Agregar un término de búsqueda"/> : null}
        </form>
    );
}

export default Form;