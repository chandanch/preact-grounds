import { createContext } from 'preact';

const UserInfoContext = createContext(null);

export const UserInfoContextProvider = ({ children }) => {
	return (
		<UserInfoContext.Provider value={{ name: 'chandio', id: 22 }}>
			{children}
		</UserInfoContext.Provider>
	);
};
