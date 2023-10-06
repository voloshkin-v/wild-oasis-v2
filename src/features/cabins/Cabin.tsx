import { Cabin as ICabin } from '@/types/supabase.helpers';

import { TableCell, TableRow } from '@/components/ui/table';
import { formatCurrency } from '@/lib/utils';

interface CabinProps {
	cabin: ICabin;
}

const Cabin = ({ cabin }: CabinProps) => {
	const {
		image,
		discount,
		name,
		description,
		maxCapacity,
		regularPrice,
		id,
	} = cabin;

	return (
		<TableRow>
			<TableCell>
				<div className="relative pb-[56.25%]">
					<img
						src={image}
						alt={name}
						title={description}
						className="absolute left-0 top-0 h-full w-full object-cover"
					/>
				</div>
			</TableCell>

			<TableCell>{name}</TableCell>
			<TableCell>Fits up up {maxCapacity} guests</TableCell>
			<TableCell>{formatCurrency(regularPrice)}</TableCell>
			<TableCell>{formatCurrency(discount)}</TableCell>
			<TableCell>Contols</TableCell>
		</TableRow>
	);
};

export default Cabin;
