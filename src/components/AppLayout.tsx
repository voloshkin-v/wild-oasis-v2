import { Outlet } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';

const AppLayout = () => {
	return (
		<div className="grid min-h-screen grid-cols-[260px_1fr] grid-rows-[auto_1fr]">
			<Sidebar />
			<Header />

			<main className="bg-background-secondary px-12 py-10">
				<div className="mx-auto flex max-w-5xl flex-col gap-8">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default AppLayout;
