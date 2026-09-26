// ===== โปรเจค A: โปรเจคเดียวกับ FOM 012 (ใช้ค้นหาพนักงาน) =====
const SUPABASE_A_URL = 'https://YOUR-PROJECT-A-ID.supabase.co';
const SUPABASE_A_KEY = 'YOUR-PROJECT-A-ANON-OR-PUBLISHABLE-KEY';
// ==============================================================

const sbA = supabase.createClient(SUPABASE_A_URL, SUPABASE_A_KEY);

// เรียกฟังก์ชันฝั่งพนักงาน (โปรเจค A)
async function rpcA(fn, args = {}) {
  const { data, error } = await sbA.rpc(fn, args);
  if (error) throw new Error(error.message);
  return data;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function escapeAttr(str) { return escapeHtml(str); }
