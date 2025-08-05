import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = (props) => {
    return(
      <>
        <div className="weather">
            <h2>{props.weather.day}</h2>
            {/* <img src={props.weather.img} alt={props.weather.imgAlt} /> */}
            <WeatherIcon img= {props.weather.img} imgAlt={props.weather.imgAlt}/>
            <p><span>conditions: </span>{props.weather.conditions}</p>
            <p><span>time: </span>{props.weather.time}</p>
        </div>
      </>
    )
};

export default WeatherForecast;