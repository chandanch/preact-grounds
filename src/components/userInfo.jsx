import { useUserInfoContext } from '../contexts/userInfoContext';

const UserInfo = () => {
	const { name, id } = useUserInfoContext();

	return (
		<p>
			User Details: {name} ID: {id}{' '}
		</p>
	);
};

export default UserInfo;
