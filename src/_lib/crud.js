const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT ;
async function createRecord(data) {
    let connection;
    try {
        connection = await oracledb.getConnection();
        const result = await connection.execute(
            `INSERT INTO your_table (column1, column2) VALUES (:val1, :val2)`,
            [data.val1, data.val2],
            { autoCommit: true }
        );
        console.log('Record inserted:', result.rowsAffected);
    } catch (err) {
        console.error('Error inserting record:', err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}

async function readRecords() {
    let connection;
    try {
        connection = await oracledb.getConnection();
        const result = await connection.execute(
            `SELECT lower(ENO) ENO,ENAME,EMAIL FROM SSPAY.EMP WHERE ACTIVITY = 'T' ORDER BY ENAME ASC`

        );
   
        console.log('Fetched records:', result.rows);
        return result.rows;
    } catch (err) {
        console.error('Error fetching records:', err);
        return [];
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}

async function updateRecord(id, data) {
    let connection;
    try {
        connection = await oracledb.getConnection();
        const result = await connection.execute(
            `UPDATE your_table SET column1 = :val1, column2 = :val2 WHERE id = :id`,
            [data.val1, data.val2, id],
            { autoCommit: true }
        );
        console.log('Record updated:', result.rowsAffected);
    } catch (err) {
        console.error('Error updating record:', err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}

async function deleteRecord(id) {
    let connection;
    try {
        connection = await oracledb.getConnection();
        const result = await connection.execute(
            `DELETE FROM your_table WHERE id = :id`,
            [id],
            { autoCommit: true }
        );
        console.log('Record deleted:', result.rowsAffected);
    } catch (err) {
        console.error('Error deleting record:', err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Error closing connection:', err);
            }
        }
    }
}

module.exports = {
    createRecord,
    readRecords,
    updateRecord,
    deleteRecord
};
