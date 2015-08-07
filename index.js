/**
 * Created by Vadym on 07/08/15.
 */
import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write('<!DOCTYPE "html">');
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello World!");
    response.write("</body>");
    response.write("</html>");
    response.end();
}).listen(81);

console.log('Server started...');