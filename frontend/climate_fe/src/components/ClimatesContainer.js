import React, { Component } from 'react'
import axios from 'axios'
import Climate from './Climate'
import update from 'immutability-helper'
import ClimateForm from './ClimateForm'

class ClimatesContainer extends Component{
	constructor(props) {
    super(props)
    this.state = {
      climates: [],
      editingClimateId: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/climates.json')
    .then(response => {
      this.setState({climates: response.data})
    })
    .catch(error => console.log(error))
  }


	addNewClimate = () => {
    	axios.post('http://localhost:3001/api/v1/climates', {
    		climate: {
    			city: '',
    			temp: '0',
    			status: ''}
    	})
    	.then(response => {
      	const climates = update(this.state.climates, { $splice: [[0, 0, response.data]]})
      	this.setState({climates: climates, editingClimateId: response.data.id})
    	})
    	.catch(error => console.log(error))
	}

	updateClimate = (climate) => {
  		const climateIndex = this.state.climates.findIndex(x => x.id === climate.id)
  		const climates = update(this.state.climates, {
    	[climateIndex]: { $set: climate }
  	})
  		this.setState({climates: climates})
	}

	render(){
		return(
			<div>
				<div>
					<button className="newClimateButton" onClick={this.addNewClimate}>
						New Climate State
					</button>
				</div>
				{this.state.climates.map((climate) => {
					if(this.state.editingClimateId === climate.id){
						return(
							<ClimateForm climate={climate} key={climate.id} updateClimate={this.updateClimate} />
						)
					} else{
						return (
							<Climate climate={climate} key={climate.id} />
						)
					}
				})}
			</div>
		);
	}
}

export default ClimatesContainer