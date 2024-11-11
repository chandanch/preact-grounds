import { Component } from 'preact';
import { useState } from 'preact/hooks';

function Clicker() {
	const [clicked, setClicked] = useState(false);

	if (clicked) {
		throw new Error('I am erroring');
	}

	return <button onClick={() => setClicked(true)}>Click Me</button>;
}

class ClickerContainer extends Component {
	state = { error: null };

	componentDidCatch(error) {
		this.setState({ error: error.message });
	}

	render() {
		const { error } = this.state;
		if (error) {
			return <p>Oh no! There was an error: {error}</p>;
		}
		return <Clicker />;
	}
}

export default ClickerContainer;
