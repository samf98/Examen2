import React, { Component } from 'react'
import axios from 'axios'

class ClimateForm extends Component{
	constructor(props){
		super(props)
		this.state= {
			city: this.props.climate.city,
      		temp: this.props.climate.temp,
      		status: this.props.climate.status
		}
	}

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const climate = {city: this.state.city, temp: this.state.temp, status: this.state.status }
    axios.put(
      `http://localhost:3001/api/v1/climates/${this.props.climate.id}`,
      {climate: climate}
      )
    .then(response => {
      this.props.updateClimate(response.data)
    })
    .catch(error => console.log(error))
  }

	render(){
		return(
			<div className="tile">
				<form onBlur = {this.handleBlur}>
					<input className='input' type="text" name="city" placeholder='Enter a city' 
					value={this.state.city} onChange={this.handleInput}/>
					<textarea className='input' name="temp" placeholder='Enter temp'
					value={this.state.temp} onChange={this.handleInput}></textarea>
					<textarea className='input' name="status" placeholder='Enter status'
					value={this.state.status} onChange={this.handleInput}></textarea>
				</form>
			</div>
			);
	}

}

export default ClimateForm