import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { fetchWeather } from '../features/slices/weatherSlice';

function Form() {
    const [city, setCity] = useState('');
    const dispatch = useAppDispatch()

    const getCity = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity('');
    }

    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={e => setCity(e.target.value)} type='text' name='city' />
            <button type='submit'>Get Weather</button>
        </form>
    )
}

export default Form