var http = require('http')

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write(`Hi, this works.\nSecret ENV var: ${process.env.secret_env_var}`)
  res.end()
})

server.listen(3000, function() {
  console.log('Server started.')
})
