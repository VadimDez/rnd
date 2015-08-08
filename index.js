/**
 * Created by Vadym on 07/08/15.
 */
import express from 'express'
import router from './roter.js'
import socketio from 'socket.io'

// set up port
const port = process.env.PORT || 8080;
const app = express();

// set static folder
app.use(express.static(__dirname + '/public'));

// configure routes
router(app);

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
const io = socketio(server);

// socket
io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});