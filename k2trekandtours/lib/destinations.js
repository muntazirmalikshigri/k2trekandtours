import { supabase } from './supabase'

export async function getAllDestinations() {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) console.error(error)
  return data || []
}

export async function getDestinationBySlug(slug) {
  const { data, error } = await supabase
    .from('destinations')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) console.error(error)
  return data
}
