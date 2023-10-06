import supabase from '@/lib/supabase-client';
import { useQuery } from '@tanstack/react-query';

const getCabins = async () => {
	const { data, error } = await supabase.from('cabins').select('*');

	if (error) {
		throw new Error('Cabins could not be loaded.');
	}

	return data;
};

export const useCabins = () => {
	return useQuery({
		queryKey: ['cabins'],
		queryFn: getCabins,
	});
};
