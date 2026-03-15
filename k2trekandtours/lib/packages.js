import { supabase } from './supabase'

export async function getAllPackages() {
  const { data, error } = await supabase
    .from('packages')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) console.error(error)
  return data || []
}

export async function getPackageBySlug(slug) {
  const { data, error } = await supabase
    .from('packages')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error) console.error(error)
  return data
}
