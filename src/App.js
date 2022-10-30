import React, { Component } from 'react';
import ball from './assets/img/ball.svg';
import bottle from './assets/img/bottle.svg';


 class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      width: 450,
      top: 20,
    }

  }
  
handleClick = () => {

  const {width, top } = this.state;
  
  if(width <= 130){
    return;
  }

  this.setState({width: width - 40, top: top + 40})

}

reset = () =>{
  
  this.setState({
   
    width: 450,
   
    top: 20,
  })
}

  render() {

    const {width} = this.state;

    return (
      <div className='container'>
 
 <button className="glow-on-hover" type="button" onClick={this.reset}>Reset</button>
        
        <img src={ball} alt='' 
        
        className='ball' 
        
        style={{width, top: width <= 130 ? 700 : 20}} 
        
        onClick ={this.handleClick} 
        
        id = {width <= 130 ? 'bounce' : ''}
        />
       
        <img src={bottle} alt='' className='bottle' />
      
      </div>
    )
  }
}



export default App;


