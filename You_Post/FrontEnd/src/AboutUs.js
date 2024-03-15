import video1 from "https://drive.google.com/file/d/1DTH8D2rKBUSMQ75A_x7rsNQPVm4FzZgF/view?usp=sharing";
import "./css/about_us.css";

export default function AboutUs()
{
    return (
        <div className="about_div">
            <h1>About us</h1>
            <video src={video1} width="700" height="500" controls="controls" autoplay="true" />
        </div>
    )
}
