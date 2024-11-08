import { useEffect, useState } from 'preact/hooks';

const SideEffector = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		console.log('Sideffector comp loaded');
	}, []);

	useEffect(() => {
		const fetchTodos = async () => {
			const todosResponse = await fetch(
				'https://jsonplaceholder.typicode.com/todos'
			);
			const todosList = await todosResponse.json();
			setTodos(todosList);
		};

		fetchTodos();
	}, []);

	return <p>{todos}</p>;
};

export default SideEffector;
