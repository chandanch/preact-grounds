import { render } from 'preact';
import { html } from 'htm/preact';

export function App() {
	const appVersion = '1.0.0';
	const appDev = html`<p>@chandanch${Math.floor(Math.random() * 100)}</p>`;

	const getRandomValue = () => {
		alert(`Current Value is ${Math.random()}`);
	};

	return (
		<div>
			<p class="big">Hello World!</p>
			<h2>App Version: {appVersion} </h2>
			{appDev}
			<button onClick={getRandomValue}>Check Count</button>
		</div>
	);
}

render(<App />, document.getElementById('app'));
