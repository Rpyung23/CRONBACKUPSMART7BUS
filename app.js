const axios = require('axios')
const mysqldump = require('mysqldump')
var nodecron = require('node-cron');
const excludedTables = ['historial_eventos', 'dispositivo_eventos']
const {getFechaActual} = require('./util/formatDate')
const IP_SERVER = "http://66.240.205.86:3001"
async function createBackup()
{
    try {
        var response = await axios.get(IP_SERVER+"/ListEmpresa")
        var empresas = []
        if (response.status == 200)
        {
            empresas = response.data
            if(empresas.length > 0)
            {
                for (var i = 0;i<empresas.length;i++)
                {
                    var mysql = {
                        host: empresas[i].host,
                        user: 'root',
                        password: empresas[i].pass,
                        database: empresas[i].db,
                        port: empresas[i].port
                    }

                    try {
                        var server = await mysqldump({
                            connection: mysql,
                            dumpToFile: `./backup/${mysql.database}_${mysql.host}_${getFechaActual()}.sql`,
                            dump:{tables:excludedTables,
                                excludeTables:true}
                        });
                    }catch (e) {
                        console.log(e.toString())
                    }
                }
            }else{
                console.log("SIN EMPRESAS PARA BACKUP")
            }
        }else{
            console.log(response.body)
        }
    }catch (e) {
        console.log(e)
    }
}

nodecron.schedule('0 2 * * *',async ()=>
{
    console.log(`INICIANDO BACKUP ${getFechaActual()}`)
    await createBackup()
    console.log("TERMINADO BACKUP....")
})

console.log("CODIGO CARGADO....")