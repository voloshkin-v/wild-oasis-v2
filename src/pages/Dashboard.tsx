import { Button } from '@/components/ui/button';

const Dashboard = () => {
	return (
		<div>
			<h1>STYLES: </h1>
			<br />

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
				laboriosam, dicta at eum animi dolores ut quasi voluptate
				cupiditate ullam! Quos, optio error unde perferendis
				exercitationem nobis dignissimos sequi impedit!
			</p>

			<Button asChild>
				<div>Button as child</div>
			</Button>

			<Button>Default default</Button>
			<Button variant="destructive">Default destructive</Button>
			<Button variant="ghost">Default ghost</Button>
			<Button variant="link">Default link</Button>
			<Button variant="outline">Default outline</Button>
			<Button variant="secondary">Default secondary</Button>
		</div>
	);
};

export default Dashboard;
