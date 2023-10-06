export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	graphql_public: {
		Tables: {
			[_ in never]: never;
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			graphql: {
				Args: {
					operationName?: string;
					query?: string;
					variables?: Json;
					extensions?: Json;
				};
				Returns: Json;
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	public: {
		Tables: {
			bookings: {
				Row: {
					cabinId: number | null;
					cabinPrice: number | null;
					created_at: string;
					endDate: string | null;
					extrasPrice: number | null;
					guestId: number | null;
					hasBreakfast: boolean | null;
					id: number;
					isPaid: boolean | null;
					numGuests: number | null;
					numNights: number | null;
					observations: string | null;
					startDate: string | null;
					status: string | null;
					totalPrice: number | null;
				};
				Insert: {
					cabinId?: number | null;
					cabinPrice?: number | null;
					created_at?: string;
					endDate?: string | null;
					extrasPrice?: number | null;
					guestId?: number | null;
					hasBreakfast?: boolean | null;
					id?: number;
					isPaid?: boolean | null;
					numGuests?: number | null;
					numNights?: number | null;
					observations?: string | null;
					startDate?: string | null;
					status?: string | null;
					totalPrice?: number | null;
				};
				Update: {
					cabinId?: number | null;
					cabinPrice?: number | null;
					created_at?: string;
					endDate?: string | null;
					extrasPrice?: number | null;
					guestId?: number | null;
					hasBreakfast?: boolean | null;
					id?: number;
					isPaid?: boolean | null;
					numGuests?: number | null;
					numNights?: number | null;
					observations?: string | null;
					startDate?: string | null;
					status?: string | null;
					totalPrice?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'bookings_cabinId_fkey';
						columns: ['cabinId'];
						referencedRelation: 'cabins';
						referencedColumns: ['id'];
					},
					{
						foreignKeyName: 'bookings_guestId_fkey';
						columns: ['guestId'];
						referencedRelation: 'guests';
						referencedColumns: ['id'];
					},
				];
			};
			cabins: {
				Row: {
					created_at: string;
					description: string;
					discount: number;
					id: number;
					image: string;
					maxCapacity: number;
					name: string;
					regularPrice: number;
				};
				Insert: {
					created_at?: string;
					description: string;
					discount: number;
					id?: number;
					image: string;
					maxCapacity: number;
					name: string;
					regularPrice: number;
				};
				Update: {
					created_at?: string;
					description?: string;
					discount?: number;
					id?: number;
					image?: string;
					maxCapacity?: number;
					name?: string;
					regularPrice?: number;
				};
				Relationships: [];
			};
			guests: {
				Row: {
					countryFlag: string | null;
					created_at: string;
					email: string | null;
					fullName: string | null;
					id: number;
					nationalID: string | null;
					nationality: string | null;
				};
				Insert: {
					countryFlag?: string | null;
					created_at?: string;
					email?: string | null;
					fullName?: string | null;
					id?: number;
					nationalID?: string | null;
					nationality?: string | null;
				};
				Update: {
					countryFlag?: string | null;
					created_at?: string;
					email?: string | null;
					fullName?: string | null;
					id?: number;
					nationalID?: string | null;
					nationality?: string | null;
				};
				Relationships: [];
			};
			settings: {
				Row: {
					breakfastPrice: number;
					created_at: string;
					id: number;
					maxBookingLength: number;
					maxGuestsPerBooking: number;
					minBookingLength: number;
				};
				Insert: {
					breakfastPrice: number;
					created_at?: string;
					id?: number;
					maxBookingLength: number;
					maxGuestsPerBooking: number;
					minBookingLength: number;
				};
				Update: {
					breakfastPrice?: number;
					created_at?: string;
					id?: number;
					maxBookingLength?: number;
					maxGuestsPerBooking?: number;
					minBookingLength?: number;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
	storage: {
		Tables: {
			buckets: {
				Row: {
					allowed_mime_types: string[] | null;
					avif_autodetection: boolean | null;
					created_at: string | null;
					file_size_limit: number | null;
					id: string;
					name: string;
					owner: string | null;
					owner_id: string | null;
					public: boolean | null;
					updated_at: string | null;
				};
				Insert: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id: string;
					name: string;
					owner?: string | null;
					owner_id?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Update: {
					allowed_mime_types?: string[] | null;
					avif_autodetection?: boolean | null;
					created_at?: string | null;
					file_size_limit?: number | null;
					id?: string;
					name?: string;
					owner?: string | null;
					owner_id?: string | null;
					public?: boolean | null;
					updated_at?: string | null;
				};
				Relationships: [];
			};
			migrations: {
				Row: {
					executed_at: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Insert: {
					executed_at?: string | null;
					hash: string;
					id: number;
					name: string;
				};
				Update: {
					executed_at?: string | null;
					hash?: string;
					id?: number;
					name?: string;
				};
				Relationships: [];
			};
			objects: {
				Row: {
					bucket_id: string | null;
					created_at: string | null;
					id: string;
					last_accessed_at: string | null;
					metadata: Json | null;
					name: string | null;
					owner: string | null;
					owner_id: string | null;
					path_tokens: string[] | null;
					updated_at: string | null;
					version: string | null;
				};
				Insert: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					owner_id?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Update: {
					bucket_id?: string | null;
					created_at?: string | null;
					id?: string;
					last_accessed_at?: string | null;
					metadata?: Json | null;
					name?: string | null;
					owner?: string | null;
					owner_id?: string | null;
					path_tokens?: string[] | null;
					updated_at?: string | null;
					version?: string | null;
				};
				Relationships: [
					{
						foreignKeyName: 'objects_bucketId_fkey';
						columns: ['bucket_id'];
						referencedRelation: 'buckets';
						referencedColumns: ['id'];
					},
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			can_insert_object: {
				Args: {
					bucketid: string;
					name: string;
					owner: string;
					metadata: Json;
				};
				Returns: undefined;
			};
			extension: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			filename: {
				Args: {
					name: string;
				};
				Returns: string;
			};
			foldername: {
				Args: {
					name: string;
				};
				Returns: unknown;
			};
			get_size_by_bucket: {
				Args: Record<PropertyKey, never>;
				Returns: {
					size: number;
					bucket_id: string;
				}[];
			};
			search: {
				Args: {
					prefix: string;
					bucketname: string;
					limits?: number;
					levels?: number;
					offsets?: number;
					search?: string;
					sortcolumn?: string;
					sortorder?: string;
				};
				Returns: {
					name: string;
					id: string;
					updated_at: string;
					created_at: string;
					last_accessed_at: string;
					metadata: Json;
				}[];
			};
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
