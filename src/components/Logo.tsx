import { useTheme } from '@/context/ThemeContext';

const Logo = () => {
	const { theme } = useTheme();

	return (
		<div>
			<img
				src={`${
					theme === 'light' ? '/logo-light.png' : '/logo-dark.png'
				}`}
				alt="The Wild Oasis logo"
				className="m-auto h-24 w-auto"
			/>
		</div>
	);
};

export default Logo;
