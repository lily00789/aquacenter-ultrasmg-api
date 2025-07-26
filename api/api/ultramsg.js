export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const mensaje = req.body;

  console.log('Mensaje recibido:', mensaje);

  // Aquí puedes guardar en Supabase si tienes conexión
  res.status(200).json({ success: true });
}
