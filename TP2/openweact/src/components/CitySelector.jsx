import { useState } from 'react';
import './CitySelector.css'

export default function CitySelector({onAddCity}) {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        try {
            await onAddCity(input)
            setError(false);
            setInput('');

        } catch (error) {
            setError(true);
        }

    }
    return(
            <form className={'form-row'} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Entrez une ville"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className={error ? 'input-error' : ''}
                />
                <button type={"submit"}>Rechercher</button> <br/>
            </form>
    )
}