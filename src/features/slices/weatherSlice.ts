import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherInfo } from "../../utils/types";
import { base_url, api_key } from '../../utils/constant';
import { putMessage } from './messageSlice';
import { AppDispatch } from "../../app/store";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {
        putWeatherInfo: (_state, action: PayloadAction<WeatherInfo>) => action.payload
    }
});

export const { putWeatherInfo } = weatherSlice.actions;
export const fetchWeather = (city: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        const info: WeatherInfo = {
            city: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        };
        dispatch(putWeatherInfo(info));
        dispatch(putMessage(''));
    } catch (e) {
        dispatch(putMessage('Enter correct city name'));
    }
};

export default weatherSlice.reducer;