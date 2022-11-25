const postgres = require('pg')
const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'toor',
    database: 'movie_app',
    port: 5432,
})

const rows = async (SQL, ...params) => {
    const client = await pool.connect()
    try {
        const { rows } = await client.query(SQL, params)
        return rows
    } finally {
        client.release()
    }
}
module.exports.rows = rows
