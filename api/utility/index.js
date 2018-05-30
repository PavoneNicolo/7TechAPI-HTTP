module.exports = {

    getFields:function(measure) {
        let result = "";
        let fieldsLength = measure.fields.length;

        for (let i = 0; i < fieldsLength; i++) {//cycle all the measurements

            let value = '"' + measure.fields[i].fldName+'":' + measure.fields[i].value;//create a valid string parseable in JSON
            result = result + value +",";//concatenate all the fields of the measurement
        }

        result = result.substring(0, result.length - 1);//remove the last comma

        return JSON.parse('{'+result+'}');
    },

    getTags:function(measure) {
        let result = "";
        let tagsLength = measure.tags.length;

        for (let i = 0; i < tagsLength; i++) {//cycle all the measurements

            let value = '"' + measure.tags[i].tagName + '":'+measure.tags[i].value; //create a valid string parseable in JSON
            result = result + value +",";//concatenate all the fields of the measurement
        }

        result = result.substring(0, result.length - 1);//remove the last comma

        return JSON.parse('{'+result+'}');
    },

    getName:function(measure){
         return measure.measurement;
    },

    getTimestamp(measure){
        return measure.timestamp;
    }
};