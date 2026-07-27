const { io } = require('../index');

//Messages sockets
io.on('connection', client => {
    console.log('Client connected');
    client.on('disconnect', () => { console.log('Client disconnected'); });
    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);
        io.emit('mensaje', { admin: 'New message' });
    });
    client.on('emitir-mensaje', (payload) => {
        client.broadcast.emit('emitir-mensaje', payload);
    });
});