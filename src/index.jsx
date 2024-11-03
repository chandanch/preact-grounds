import { render } from 'preact';

import AppInfo from './components/appInfo';
import CustomButton from './components/CustomButton';
import CounterButton from './components/counterButton';

export function App() {
	return (
		<div>
			<AppInfo />
			<CustomButton>Class Button</CustomButton>
			<CounterButton />
		</div>
	);
}

render(<App />, document.getElementById('app'));
