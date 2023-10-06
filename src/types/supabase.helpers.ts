import { Database } from './supabase';

type Tables<T extends keyof Database['public']['Tables']> =
	Database['public']['Tables'][T]['Row'];

export type Cabin = Tables<'cabins'>;
