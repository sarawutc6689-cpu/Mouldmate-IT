// ===== ใส่ค่าจาก Supabase: Project Settings > API =====
// ใช้โปรเจค Supabase เดียวกับ FOM 012 ได้เลย (ค่าเดียวกัน)
const SUPABASE_URL = 'https://YOUR-PROJECT-ID.supabase.co';
const SUPABASE_KEY = 'YOUR-ANON-OR-PUBLISHABLE-KEY';
// ======================================================

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// เรียกฟังก์ชันใน Supabase (แทน google.script.run)
async function rpc(fn, args = {}) {
  const { data, error } = await sb.rpc(fn, args);
  if (error) throw new Error(error.message);
  return data;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function escapeAttr(str) { return escapeHtml(str); }
