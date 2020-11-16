import React from 'react'
import styles from './Body.module.css';

class Body extends React.Component {
    
constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.state = {color: "black"};
    this.handleClick = this.handleClick.bind(this);
    
  }


  handleClick() {
    const newColor = this.state.color === "black" ? "yellow" : "black";
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      color: newColor,
    }));

    }

 

render() {


 return (
     
        <div style={{background: this.state.color}}>

            <span className={styles.text}>This is a body!</span>
            <p>
            <button type = "pimary" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            </p>
        </div>
    )
}
}
export default Body;