export interface Forecast {
    cityId: number;
    conditions: string;
    wind: {
        speed: string,
        direction: string
    };
    temperature: {
        day: {
            min: number,
            max: number
        }
        night: {
            min: number,
            max: number
        }
    }
}
