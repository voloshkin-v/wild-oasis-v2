import { useCabins } from './hooks/useCabins';

import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Cabin from './Cabin';

const cols = ['', 'Cabin', 'Capacity', 'Price', 'Discount', ''];

const CabinTable = () => {
	const { data: cabins, isLoading, isError } = useCabins();

	if (isLoading) {
		return <h2>Loading...</h2>;
	}

	if (isError) {
		return <h2>Error.</h2>;
	}

	return (
		<Table>
			<TableHeader>
				<TableRow>
					{cols.map((col, i) => (
						<TableHead key={i}>{col}</TableHead>
					))}
				</TableRow>
			</TableHeader>

			<TableBody>
				{cabins.map((cabin) => (
					<Cabin key={cabin.id} cabin={cabin} />
				))}
			</TableBody>
		</Table>
	);
};

export default CabinTable;
