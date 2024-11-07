import { render } from 'preact';

import AppInfo from './components/appInfo';
import CustomButton from './components/CustomButton';
import CounterButton from './components/counterButton';
import { UserInfoContextProvider } from './contexts/userInfoContext';
import InputFocuser from './components/inputFocuser';

export function App() {
	return (
		<div>
			<AppInfo />
			<CustomButton>Class Button</CustomButton>
			<CounterButton />
		</div>
	);
}

// use of context: wrap App Comp with context provider

export const AppWithContext = () => {
	return (
		<UserInfoContextProvider>
			<AppInfo />
			<InputFocuser />
		</UserInfoContextProvider>
	);
};

render(<App />, document.getElementById('app'));
