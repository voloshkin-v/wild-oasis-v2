import { NavLink } from 'react-router-dom';
import { ROUTER_PATHS } from '@/lib/router.constant';
import { Button } from './ui/button';

const navigation = [
	{
		path: ROUTER_PATHS.DASHBOARD,
		title: 'Home',
	},
	{
		path: ROUTER_PATHS.BOOKINGS,
		title: 'Bookings',
	},
	{
		path: ROUTER_PATHS.CABIBS,
		title: 'Cabins',
	},
	{
		path: ROUTER_PATHS.USERS,
		title: 'Users',
	},
	{
		path: ROUTER_PATHS.SETTINGS,
		title: 'Settings',
	},
];

const MainNav = () => {
	return (
		<nav>
			<ul className="flex flex-col gap-y-2">
				{navigation.map(({ path, title }, index) => (
					<li key={index}>
						<Button
							variant="ghost"
							asChild
							className="flex w-full justify-start px-6 py-3 text-base font-medium">
							<NavLink to={path}>
								<span>{title}</span>
							</NavLink>
						</Button>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default MainNav;
