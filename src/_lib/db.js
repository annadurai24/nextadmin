const oracledb = require('oracledb');

async function connectToDatabase() {
    try {
        await oracledb.createPool({
            user: 'SSPAY',
            password: 'Thondi623407',
            connectString: '(description= (retry_count=20)(retry_delay=3)(address=(protocol=tcps)(port=1522)(host=adb.ap-mumbai-1.oraclecloud.com))(connect_data=(service_name=gc604e270480810_sundarisilkdb_high.adb.oraclecloud.com))(security=(ssl_server_dn_match=yes)))',
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