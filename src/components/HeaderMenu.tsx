import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { ROUTER_PATHS } from '@/lib/router.constant';

import { User, LogOut as LogOutIcon } from 'lucide-react';
import { Button } from './ui/button';

const HeaderMenu = () => {
	return (
		<div>
			<Button variant="ghost" asChild size="icon">
				<Link to={ROUTER_PATHS.ACCOUNT}>
					<User className="h-[1.2rem] w-[1.2rem]" />
				</Link>
			</Button>

			<ThemeToggle />

			<Button variant="ghost" asChild size="icon">
				<button>
					<LogOutIcon className="h-[1.2rem] w-[1.2rem]" />
				</button>
			</Button>
		</div>
	);
};

export default HeaderMenu;
