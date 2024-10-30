import { render } from 'preact';
import { html } from 'htm/preact';

export function App() {
	const appVersion = Math.random();
	const appDev = html`<p>chandanch ${Math.random()}</p>`;

	return (
		<div>
			<p class="big">Hello World!</p>
			<h2>App Version: {appVersion} </h2>
			{appDev}
		</div>
	);
}

render(<App />, document.getElementById('app'));
