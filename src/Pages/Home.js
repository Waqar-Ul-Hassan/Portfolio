import { Link } from 'react-router-dom'
import Main from "../Background/HomeBack"
import calcPic from './Assets/CalculatorPic.png'


export default function Home() {
        return <>
        <Main />
        <div class="grid-container">
                <div class="Background"></div>
                <div class="AboutMe">
                        <h1>About Me <hr></hr></h1>
                        <h3>My name is Waqar! Currently I am in Software Engineering II at McMaster University. <br/>
               I am passionate about web/app development as well as hardware assembly through micro-controllers.</h3>
                </div>
                <Link to="/About">
                        <button className="button1">Learn More</button>
                </Link>
                {/* <div class="Projects">
                        <h1>Projects <hr></hr></h1>
                        <img className="P1image" src={calcPic} alt="" />
                </div>
                <Link to="/Projects">
                        <button className="button2">Projects</button>
                </Link> */}
        </div>
        </>

}