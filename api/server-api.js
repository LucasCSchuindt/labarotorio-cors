const http = require('http');
const PORT = 8080;
const ORIGEM = 'https://bookish-meme-pjxw74jwg5w4c65v4-3000.app.github.dev';

http.createServer((req, res) => {
  // Preflight: o navegador pergunta se pode enviar a requisição real
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': ORIGEM,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Identificador-Estudante, Content-Type',
      'Access-Control-Max-Age': '60'
    });
    res.end();
    return;
  }

  if (req.method === 'GET' && req.url === '/dados') {
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': ORIGEM
    });
    res.end(JSON.stringify({
      matricula: '2026108691',
      status: 'dados_sensiveis'
    }));
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ erro: 'Nao encontrado' }));
}).listen(PORT, () => {
  console.log(`[API] Servidor ativo na porta ${PORT}`);
});