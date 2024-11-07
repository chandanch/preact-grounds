import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

const UserInfoContext = createContext(null);

export const useUserInfoContext = () => useContext(UserInfoContext);

export const UserInfoContextProvider = ({ children }) => {
	return (
		<UserInfoContext.Provider value={{ name: 'chandio', id: 22 }}>
			{children}
		</UserInfoContext.Provider>
	);
};
