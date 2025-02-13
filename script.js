const hana = require("@sap/hana-client");
const conn = hana.createConnection();
const traceCB = function (buf) {
  console.log(buf);
};
conn.onTrace("API=TRACE,SQL=TRACE,FLUSH,OutBufferSize=64k", traceCB);
const conn_params = {
  host: "", // replace by hana.credentials.host
  port: "443",
  currentSchema: "", // replace by hana.credentials.schema
  uid: "", // <-- replace by hana.credentials.user
  pwd: "", // <-- replace by hana.credentials.password
};

conn.connect(conn_params, function (err) {
  if (err) throw err;
  conn.exec('SELECT * FROM DUMMY',
      function (err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result));
        conn.disconnect();
      }
    );
});