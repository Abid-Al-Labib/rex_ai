import { supabase_client } from "./SupabaseClient";

export async function get_reviews() {
    try {
        const { data: reviews, error } = await supabase_client
            .from('reviews')
            .select('*');

        if (error) {
            throw error; 
        }

        return reviews; 
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return null; 
    }
}
