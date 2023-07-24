import headPic from './Assets/WaqarPic.png'

export default function About() {
     return(
          <><h1 className="titleA">About Me</h1>
          <p className="intro">My name is Waqar! Currently I am in Software Engineering II at McMaster University. 
                               I am passionate<br/> about web/app development as well as hardware assembly through micro-controllers. 
               <br/><br/>
               I originally got into the interest of the technology industry in grade 9, this is when I began learning how <br/>to code in basic markups such as html. Then, through the few years of high school I decided that I really<br/> enjoyed the program development as I learned a wide range of languages such as, java script, java, python,<br/> lua script, C++, and swift. 
               Later I was able to implement my knowledge of programming with my knowledge of <br/>hardware, this drew my interest into micro-controllers. In my spare time learning how to create small projects <br/>with arduinos and rasberry pi's is something that I have come to truly appreciate. Some small projects I have <br/>worked on include, car parking sensors, thermostat with display, and a L.E.D music interactive box.
               <br/>dditionally, I also enjoy reading some books on theory as well as going on walks and trails to release<br/> any stress and tension caused <br/>due to worldly needs.
          </p>

          <img className="selfPic"src={headPic} alt="" />
          </>
     );
     
          
     
}