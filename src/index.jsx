import { render } from 'preact';

import AppInfo from './components/appInfo';

export function App() {
	return (
		<div>
			<AppInfo />
		</div>
	);
}

render(<App />, document.getElementById('app'));
