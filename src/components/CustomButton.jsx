import { Component } from 'preact';

class CustomButton extends Component {
	render(props) {
		return <button class="my-button">{props.children}</button>;
	}
}

export default CustomButton;
