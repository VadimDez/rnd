/**
 * Created by Vadym on 08/08/15.
 */
import path from 'path'
export default function (app) {
    app.get('*', (req, res) => {
        res.sendFile('index.html', {
            root: path.join(__dirname, './public')
        })
    });
}