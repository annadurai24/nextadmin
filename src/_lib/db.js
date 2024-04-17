const oracledb = require('oracledb');

async function connectToDatabase() {
    try {
        await oracledb.createPool({
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            connectString: process.env.DB_CONNECTION_STRING,
            poolMax: 20,
            poolMin: 2,
            poolIncrement: 2,
            poolTimeout: 60
        });
        console.log('Connected to Oracle Autonomous Database');
    } catch (err) {
        console.error('Error connecting to Oracle Autonomous Database', err);
    }
}

async function closePoolAndExit() {
    console.log('\nTerminating');
    try {
        await oracledb.getPool().close(10);
        console.log('Pool closed');
        process.exit(0);
    } catch (err) {
        console.error('Error closing the pool', err);
        process.exit(1);
    }
}

process
    .once('SIGTERM', closePoolAndExit)
    .once('SIGINT', closePoolAndExit);

module.exports = {
    connectToDatabase
};