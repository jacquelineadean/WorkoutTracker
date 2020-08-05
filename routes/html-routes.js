// Requiring path to so we can use relative routes to HTML files
const path = require('path');

// Routes
// ===================================================================
module.exports = app => {
    // GET route for exercise html
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
    // GET route for stats html
    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
}