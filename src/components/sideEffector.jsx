import { useEffect, useState } from 'preact/hooks';

const SideEffector = () => {
	const [todos, setTodos] = useState([]);
	const [count, setCount] = useState(1);

	useEffect(() => {
		console.log('Sideffector comp loaded');
	}, []);

	useEffect(() => {
		const fetchTodos = async () => {
			const todosResponse = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${count}`
			);
			const todosList = await todosResponse.json();
			setTodos(todosList);
		};

		fetchTodos();
	}, [count]);

	const increaseCount = () => {
		if (count > 100) {
			setCount(1);
		} else {
			setCount(count + 1);
		}
	};

	return (
		<>
			<p>{todos}</p>
			<button onClick={increaseCount}>Increase</button>
		</>
	);
};

export default SideEffector;
