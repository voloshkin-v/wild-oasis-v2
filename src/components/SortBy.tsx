import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface Option {
	label: string;
	value: string;
}

interface SortByProps {
	options: Option[];
}

const SortBy = ({ options }: SortByProps) => {
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Sort by" />
			</SelectTrigger>

			<SelectContent>
				{options.map((option) => (
					<SelectItem value={option.value}>{option.label}</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default SortBy;
