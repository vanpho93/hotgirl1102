const pg = require('pg');

const config = {
  user: 'kyreohmtxstplx',
  database: 'd3sdrm0knuaur9',
  password: 'e4ccbccdabbefcecc52c1f1fa263a4333a6b265fb1d970750151060538b279b7',
  host: 'ec2-54-221-210-126.compute-1.amazonaws.com',
  port: 5432,
  max: 5,
  idleTimeoutMillis: 10000,
  ssl: true
};

const pool = new pg.Pool(config);

function queryDB(sql, arrayData, cb) {
    pool.connect((err, client, done) => {
        if (err) return cb(`${err} `);
        client.query(sql, arrayData, (queryErr, result) => {
            done(queryErr);
            if (queryErr) return cb(`${queryErr} `);
            cb(undefined, result);
        });
    });
}

module.exports = queryDB;
