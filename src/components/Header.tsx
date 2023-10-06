import HeaderMenu from './HeaderMenu';
import User from './User';

const Header = () => {
	return (
		<header className="flex items-center justify-end gap-6 border-b bg-background px-12 py-3">
			<User />
			<HeaderMenu />
		</header>
	);
};

export default Header;
