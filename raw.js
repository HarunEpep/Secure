export default function handler(req, res) {
  // Daftar token whitelist:
  const whitelist = [
    "Token"
  ];

  // Kirim response JSON
  res.status(200).json(whitelist);
}
