import { useAppSelector } from "../app/hooks";

function Weather() {
    const message = useAppSelector(state => state.message);
    const weather = useAppSelector(state => state.weatherInfo);

    return (
        <div className='infoWeath'>{
            !message && <>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}</p>
            </>
        }
            <>{message}</>
        </div>
    )


}

export default Weather