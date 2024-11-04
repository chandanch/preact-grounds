import { useState } from 'preact/hooks';

const CounterButton = () => {
	const [counter, setCounter] = useState(0);
	const [isActive, setActive] = useState(true);

	const incrementCounter = () => {
		setCounter(counter + 1);
		setActive(!isActive);
		setTimeout(() => {
			setActive(!isActive);
		}, 3000);
	};

	return (
		<button onClick={incrementCounter} disabled={isActive}>
			Add one! Current: {counter}{' '}
		</button>
	);
};

export default CounterButton;
