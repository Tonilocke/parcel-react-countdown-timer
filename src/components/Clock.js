import { useState, useEffect } from "react";

const Clock = () =>{
    const [days, setDays] = useState(8);
    const [hours, setHours] = useState(24);
    const [minutes, setMinutes] = useState(60);
    const [seconds, setSeconds] = useState(60);
    useEffect(()=>{
        setInterval(()=>setSeconds(seconds-1),1000);
        if(days > 0){
            if(seconds <= 0){
                setMinutes(minutes -1);
                setSeconds(60);
            }
            if(minutes <= 0){
                setHours(hours-1);
                setMinutes(60);
                setSeconds(60);
            } 
            if(hours <= 0){
                setHours(24);
                setDays(days-1);
                setMinutes(60);
                setSeconds(60);
            }
        }
    },[seconds]);
    return(
        <section className="container">
            <h1>We're launching soon</h1>
            <section className="clock-container">
                <div id="days"><div className="text">{"0" +  days }</div> <div className="top"></div><div className="bottom"></div>  </div>
                <div id="hours"><div className="text">{ hours }</div>  <div className="top"></div><div className="bottom"></div> </div>
                <div id="minutes"><div className="text">{ minutes }</div>   <div className="top"></div><div className="bottom"></div>  </div>
                <div id="seconds"><div className="text">{ seconds }</div>  <div className="top"></div><div className="bottom"></div> </div>
            </section>
            <section className="bottom-text-container"> 
                <div className="bottom-text"> days</div>
                <div className="bottom-text"> hours</div>
                <div className="bottom-text"> minutes</div>
                <div className="bottom-text"> seconds</div>
            </section>
        </section>  
    );
}

export default Clock;