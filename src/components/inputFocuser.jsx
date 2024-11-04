import { useRef } from 'preact/hooks';

const InputFocuser = () => {
	const inputElement = useRef(null);

	const moveFocus = () => {
		if (inputElement.current) {
			inputElement.current.focus();
			inputElement.current.value = 'DD';
		}
	};

	return (
		<>
			<input ref={inputElement} name="input" placeholder="enter text" />{' '}
			<button onClick={moveFocus}>Focus</button>
		</>
	);
};

export default InputFocuser;
