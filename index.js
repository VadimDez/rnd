/**
 * Created by Vadym on 07/08/15.
 */
import http from 'http'
import express from 'express'
import router from './roter.js'

// set up port
const port = process.env.PORT || 8080;
const server = express();

// configure routes
router(server);

server.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});