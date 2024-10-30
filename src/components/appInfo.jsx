import { html } from 'htm/preact';

const AppInfo = () => {
	const appVersion = '1.0.0';
	const appDev = html`<p>@chandanch${Math.floor(Math.random() * 100)}</p>`;

	const getRandomValue = () => {
		alert(`Current Value is ${Math.random()}`);
	};

	return (
		<>
			<p class="big">Hello User!</p>
			<h2>App Version: {appVersion} </h2>
			{appDev}
			<button onClick={getRandomValue}>Check Count</button>
		</>
	);
};

export default AppInfo;
