import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        
        // console.log('this.props', this.props);
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor((time/(1000*60*60)) % 24);
        const days = Math.floor(time/(1000*60*60*24));
                
        this.setState({days, hours, minutes, seconds})
    }
    
    // depecrated function. Need "UNSAFE_" to keep running or "componentDidMount()"
    // UNSAFE_componentWillMount() {
    //     // this.getTimeUntil(this.props.deadline);
    //     setInterval(
    //         () => this.getTimeUntil(this.props.deadline)
    //         ,1000
    //     )
    // }

    componentDidMount() {
        setInterval(
            () => this.getTimeUntil(this.props.deadline)
            ,1000
        )
    }

    leading0(num){
        return num < 10 ? '0' + num : num;
    }

    render() {
        // infinite Loop. Need component function to avoid looping over the render
        // this.getTimeUntil(this.props.deadline);

        return(
            <div>
                <div className="clock clock-day">{this.leading0(this.state.days)} Days</div>
                <div className="clock clock-hour">{this.leading0(this.state.hours)} Hours</div>
                <div className="clock clock-minute">{this.leading0(this.state.minutes)} Minutes</div>
                <div className="clock clock-second">{this.leading0(this.state.seconds)} Seconds</div>
            </div>
        )
    }
}
export default Clock;