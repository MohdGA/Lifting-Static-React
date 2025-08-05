import "./WeatherForecast.css";

const WeatherIcon = (props) => {
    return (
        <>
            <img src={props.img} alt={props.imaAlt} />
        </>
    )
}

export default WeatherIcon;