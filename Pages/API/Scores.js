export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { phase, matches } = req.body;
  if (!phase || !matches) return res.status(400).json({ error: "Paramètres manquants" });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Clé API non configurée" });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        tools: [{ type: "web_search_20250305", name: "web_search" }],
        messages: [
          {
            role: "user",
            content: `Tu es un assistant spécialisé dans les résultats sportifs de la Coupe du Monde FIFA 2026.
Matchs de la phase "${phase}" :
${matches}
Fais une recherche web pour trouver les scores officiels.
Retourne UNIQUEMENT un JSON valide sans backticks ni markdown :
{"results":[{"id":1,"home":2,"away":1},...],"champion":"Equipe ou null"}
N'inclure QUE les matchs terminés. Si aucun match terminé, retourne {"results":[],"champion":null}`,
          },
