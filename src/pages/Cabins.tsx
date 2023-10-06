import Row from '@/components/Row';
import { Button } from '@/components/ui/button';
import AddCabin from '@/features/cabins/AddCabin';
import CabinTable from '@/features/cabins/CabinTable';
import CabinTableOperations from '@/features/cabins/CabinTableOperations';

const Cabins = () => {
	return (
		<>
			<Row>
				<h1 className="text-3xl font-semibold">Cabins</h1>

				<CabinTableOperations />
			</Row>

			<CabinTable />
			<AddCabin />
		</>
	);
};

export default Cabins;
