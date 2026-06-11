const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

async function dbGet(key) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/cdm2026?key=eq.${key}&select=value`, {
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
    }
  });
  const data = await res.json();
  if (data && data.length > 0) return JSON.parse(data[0].value);
  return null;
}

async function dbSet(key, value) {
  await fetch(`${SUPABASE_URL}/rest/v1/cdm2026`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_KEY,
      "Authorization": `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "resolution=merge-duplicates",
    },
    body: JSON.stringify({ key, value: JSON.stringify(value) })
  });
}

export default async function handler(req, res) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({ error: "Base de données non configurée" });
  }
  try {
    if (req.method === "GET") {
      const { key } = req.query;
      const value = await dbGet(key);
      return res.status(200).json({ value });
    }
    if (req.method === "POST") {
      const { key, value } = req.body;
      await dbSet(key, value);
      return res.status(200).json({ ok: true });
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
