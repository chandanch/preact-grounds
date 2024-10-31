import { Component } from 'preact';

class CustomButton extends Component {
	componentDidMount() {
		console.log('component mounted');
	}

	render(props) {
		return <button class="my-button">{props.children}</button>;
	}
}

export default CustomButton;
