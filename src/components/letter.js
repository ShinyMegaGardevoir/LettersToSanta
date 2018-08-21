import React, { Component } from 'react';

import Input from './input';

const BLANK_LETTER = {
  name: '',
  goodOrBad: '',
  boyOrGirl: '',
  toyOne: '',
  toyTwo: '',
  snackOne: '',
  snackTwo: '',
  reindeerSnack: '',
  hideBoxes: false
}

class Letter extends Component {
	constructor() {
        super()

        this.state = BLANK_LETTER;

				this.letterSubmit = this.letterSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.writeParagraph = this.writeParagraph.bind(this);
    }

		handleInputChange(event) {
			this.setState({ [event.target.name]: event.target.value })
		}

		letterSubmit(event) {
			event.preventDefault()
			if(this.state.hideBoxes) {
				this.setState(BLANK_LETTER)
			} else {
				this.setState({ hideBoxes: true })
			}
		}

    writeParagraph(inputData) {
      if(this.state.hideBoxes) {
        return(
          <p>

              Dear Santa,



              My name is <b>{inputData.name}</b> this year I have been a <b>{inputData.goodOrBad}</b> <b>{inputData.boyOrGirl}</b>. For Christmas I would like a/an <b>{inputData.toyOne}</b>. If you are unable to bring that my backup present would have to be a/an <b>{inputData.toyTwo}</b>. I will make sure to leave you a snack of <b>{inputData.snackOne}</b> and <b>{inputData.snackTwo}</b>. I will also make sure to leave some <b>{inputData.reindeerSnack}</b> for your reindeer incase they get hungry during your busy night.



              Your friend, <b>{inputData.name}</b>

          </p>
      )}
      else {
        return(
          <p>Dear Santa, My name is {Input(inputData[0], this.handleInputChange)}. This year I have been a {Input(inputData[1], this.handleInputChange)} {Input(inputData[2], this.handleInputChange)}. For Christmas I would like a/an {Input(inputData[3], this.handleInputChange)}. If you are unable to bring that my backup present would have to be a/an {Input(inputData[4], this.handleInputChange)}. I will make sure to leave you a snack of {Input(inputData[5], this.handleInputChange)} and {Input(inputData[6], this.handleInputChange)}. I will also make sure to leave some {Input(inputData[7], this.handleInputChange)} for your reindeer in case they get hungry during your busy night.
           Your friend, {Input(inputData[0], this.handleInputChange)}
           </p>
        )
      }



      }

		render() {
			   const inputData = [
					   {title: 'name', state: this.state.name, name: 'name'},
            {title: 'Good/Bad', state: this.state.goodOrBad, name: 'goodOrBad'},
            {title: 'Boy/Girl', state: this.state.boyOrGirl, name: 'boyOrGirl'},
            {title: 'Toy', state: this.state.toyOne, name: 'toyOne'},
            {title: 'Toy', state: this.state.toyTwo, name: 'toyTwo'},
            {title: 'Snack', state: this.state.snackOne, name: 'snackOne'},
            {title: 'Snacc', state: this.state.snackTwo, name: 'snackTwo'},
            {title: 'Reindeer Snack', state: this.state.reindeerSnack, name: 'reindeerSnack'},

			     ]

		         return (
			            <form onSubmit={this.letterSubmit} className = "letter">
                  <div className = "container">
                      {
                        this.writeParagraph(inputData)
                      }
			               </div>
				              <button type ="submit">{!this.state.hideBoxes ? 'Complete' : 'Restart'}</button>
			              </form>

			)
	}
}

export default Letter;
