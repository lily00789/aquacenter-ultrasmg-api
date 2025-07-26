export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { to, message } = req.body;

  const resp = await fetch(`https://api.ultramsg.com/{{instance134747}}/messages/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      token: '{{fsyz9lqfqppvvqap}}',
      to,
      body: message
    })
  });

  const data = await resp.json();
  res.status(200).json(data);
}
