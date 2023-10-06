import Row from '@/components/Row';
import Filters from '@/components/Filters';
import SortBy from '@/components/SortBy';

const CabinTableOperations = () => {
	return (
		<Row>
			<Filters />
			<SortBy options={[{ label: '1', value: 'ad' }]} />
		</Row>
	);
};

export default CabinTableOperations;
