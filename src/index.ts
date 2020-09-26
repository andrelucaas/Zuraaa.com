import http from 'http'
import app from './app'

const port = app.get('port')

const server = http.createServer(app)
server.listen(port)

server.on('listening', () => {
    console.log('Esperando conexoes a partir da porta: ' + port)
})