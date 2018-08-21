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
			<div className = "paragraph">

      if(this.state.hideBoxes) {
        <p>Dear Santa,
                 My name is <b>{inputData.name}</b> this year I have been a <b>{data.goodOrBad}</b> <b>{data.boyOrGirl}</b>. For Christmas I would like a/an <b>{data.toyOne}</b>. If you are unable to bring that my backup present would have to be a/an <b>{data.toyTwo}</b>. I will make sure to leave you a snack of <b>{data.snackOne}</b> and <b>{data.snackTwo}</b>. I will also make sure to leave some <b>{data.reindeerSnack}</b> for your reindeer incase they get hungry during your busy night.
                 Your friend, <b>{data.name}</b>
        </p>
      }
      else {
        <p>Dear Santa,
                 My name is {Input(inputData[0], this.handleInputChange)} this year.
        </p>
      }
			</div>
				<button type ="submit">{!this.state.hideBoxes ? 'Complete' : 'Restart'}</button>
			</form>

			)
	}
}

export default Letter;
