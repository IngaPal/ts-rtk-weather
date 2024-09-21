import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherInfo } from "../../utils/types";
import { base_url, api_key } from '../../utils/constant';
import { putMessage } from './messageSlice';

export const fetchWeather = createAsyncThunk<WeatherInfo, string>(
    'weather/fetchWeather',
    async (city, { dispatch }) => {
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
        dispatch(putMessage(''));
        return info;
    } catch (e) {
        dispatch(putMessage('Enter correct city name'));
        throw e;
    }
}
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {
        putWeatherInfo: (_state, action) => action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const { putWeatherInfo } = weatherSlice.actions;
export default weatherSlice.reducer;