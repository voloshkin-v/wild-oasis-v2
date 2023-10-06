import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATHS } from '@/lib/router.constant';

import Dashboard from '@/pages/Dashboard';
import NotFound from '@/pages/NotFound';
import AppLayout from '@/components/AppLayout';
import Bookings from '@/pages/Bookings';
import Cabins from '@/pages/Cabins';
import Settings from '@/pages/Settings';
import Login from '@/pages/Login';
import Users from './pages/Users';
import Account from './pages/Account';

const App = () => {
	const isLoggedIn = true;

	return (
		<Routes>
			<Route path="/" element={<AppLayout />}>
				<Route index element={<Dashboard />} />
				<Route path={ROUTER_PATHS.DASHBOARD} element={<Dashboard />} />
				<Route path={ROUTER_PATHS.BOOKINGS} element={<Bookings />} />
				<Route path={ROUTER_PATHS.CABIBS} element={<Cabins />} />
				<Route path={ROUTER_PATHS.USERS} element={<Users />} />
				<Route path={ROUTER_PATHS.SETTINGS} element={<Settings />} />
				<Route path={ROUTER_PATHS.ACCOUNT} element={<Account />} />
			</Route>

			<Route path={ROUTER_PATHS.LOGIN} element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
