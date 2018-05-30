const express = require('express');
const bodyParser = require('body-parser');
const influx = require("influx");
const utility = require('../utility');

let router = express.Router();


const influxconn = new influx.InfluxDB({
    host:'localhost',
    database:'prova',
    //username:'user1',
    //password:'user1',
    port:8086
})


router.use(bodyParser.json());

router.post("/write",(req,res)=> {
    let obj = req.body;
    let queueLength = obj.length;

    for(let i = 0;i < queueLength;i++) {

        let myMeasurement = utility.getName(obj[i]);
        let timestamp = utility.getTimestamp(obj[i]);
        let arrayTags = utility.getTags(obj[i]);
        let arrayFields = utility.getFields(obj[i]);

        influxconn.writePoints([
            {
                measurement: myMeasurement,
                fields: arrayFields,
                tags: arrayTags,
                timestamp: timestamp
            }
        ])

    }
    res.sendStatus(204);
});

module.exports=router;