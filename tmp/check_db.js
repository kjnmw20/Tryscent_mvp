
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkData() {
  console.log('Target URL:', supabaseUrl);
  
  const { data, error } = await supabase
    .from('perfumes')
    .select('*');

  if (error) {
    console.error('Error fetching perfumes:', error);
    return;
  }

  if (data && data.length > 0) {
    console.log(`Found ${data.length} rows.`);
    console.log('First row sample:', JSON.stringify(data[0], null, 2));
  } else {
    console.log('No data found in perfumes table even without filters.');
    console.log('This might be due to Row Level Security (RLS) or the table being empty.');
  }
}

checkData();
