import { useState } from 'preact/hooks';

const CounterButton = () => {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(counter + 1);
	};

	return (
		<button onClick={incrementCounter}>Add one! Current: {counter} </button>
	);
};

export default CounterButton;
