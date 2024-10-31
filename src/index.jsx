import { render } from 'preact';

import AppInfo from './components/appInfo';
import CustomButton from './components/CustomButton';

export function App() {
	return (
		<div>
			<AppInfo />
			<CustomButton>Class Button</CustomButton>
		</div>
	);
}

render(<App />, document.getElementById('app'));
