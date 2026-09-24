// ===== ใส่ค่าจาก Supabase: Project Settings > API =====
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

// กัน HTML แทรกจากข้อมูลผู้ใช้
function esc(v) {
  return String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
const $ = id => document.getElementById(id);
const fmtDate = d => d ? new Date(d).toLocaleDateString('th-TH') : '-';
