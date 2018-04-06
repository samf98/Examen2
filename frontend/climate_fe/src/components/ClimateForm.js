import React, { Component } from 'react'

class ClimateForm extends Component{
	constructor(props){
		super(props)
		this.state= {

		}
	}

	render(){
		return(
			<div className="tile">
				<form>
					<input className='input' type="text" name="city" placeholder='Enter a city' />
					<input className='input' type="text" name="temp" placeholder='Insert the temperature' />
					<input className='input' type="text" name="status" placeholder='Enter status' />
				</form>
			</div>
			);
	}

}

export default ClimateForm