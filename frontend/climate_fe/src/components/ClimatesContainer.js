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
    axios.post('http://localhost:3001/api/v1/climates.json', {climate: {city: '', temp: '', status: ''}})
    .then(response => {
    	const climates = update(this.state.climates, { $splice: [[0, 0, response.data]]})
    	this.setState({climates: climates, editingClimateId: response.data.id})
    })
    .catch(error => console.log(error))
  }

	render(){
		return(
			<div>
				<div>
					<button className="newClimateButton" onClick={this.addNewClimate}>
						New Climate state
					</button>
				</div>
				{this.state.climates.map((climate) => {
					if(this.state.editingClimateId === climate.id){
						return(
							<ClimateForm climate={climate} key={climate.id} />
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