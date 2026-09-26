// ===== โปรเจค B: โปรเจคที่มีตาราง assets อยู่แล้ว =====
const SUPABASE_B_URL = 'https://YOUR-PROJECT-B-ID.supabase.co';
const SUPABASE_B_KEY = 'YOUR-PROJECT-B-ANON-OR-PUBLISHABLE-KEY';
// ==============================================================

const sbB = supabase.createClient(SUPABASE_B_URL, SUPABASE_B_KEY);

// เรียกฟังก์ชันฝั่งทรัพย์สิน (โปรเจค B)
async function rpcB(fn, args = {}) {
  const { data, error } = await sbB.rpc(fn, args);
  if (error) throw new Error(error.message);
  return data;
}
