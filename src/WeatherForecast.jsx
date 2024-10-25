import './WeatherForecast.css'
const DisplayForecast = (props) => {
    return (
        <div className="weather">
            <h2>{props.day}</h2>
            <img src={props.img} alt="{props.imgAlt}" />
            <p><span>conditions: {props.conditions} </span></p>
            <p><span>time: {props.time} </span></p>
        </div>
    )
}
export default DisplayForecast