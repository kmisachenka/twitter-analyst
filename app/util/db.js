var loki = require('lokijs');

var db = new loki('db.json');

db.loadDatabase();

module.exports = db;