const fs = require('fs')


module.exports =  function deleteUser( nameUser ){
   
    const json = JSON.parse(fs.readFileSync(__dirname+"/names.json"))
    let data = json["data"]

    let listModified = {
        "data":[]
    }

    let i = data.indexOf( nameUser );
    if(i>= 0)
        data.splice( i, 1 );
        for (iterator in data){
            listModified.data.push(data[iterator])
        }
        fs.writeFileSync('names.json', JSON.stringify(listModified))
}