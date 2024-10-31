import { Component } from 'preact';

class CustomButton extends Component {
	componentDidMount() {
		console.log('component mounted');
	}

	componentWillUnmount() {
		console.log('component unmounted');
	}

	render(props) {
		return <button class="my-button">{props.children}</button>;
	}
}

export default CustomButton;
