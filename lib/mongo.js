const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config/index')

const MONGO_URI = "mongodb+srv://jonathan:servi123@cluster0-gjsoe.mongodb.net/test?retryWrites=true&w=majority"

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true})
        this.dbName = "db_plants"
    }
    connect() {
        if(!MongoLib.connection){
            MongoLib.connection = new Promise((resolve, reject)=> {
                this.client.connect(err => {
                    if(err) {
                        reject(err)
                    } 
                        console.log('Conectado con la DB')
                        resolve(this.client.db(this.dbName))
                    })
                })
            }
            return MongoLib.connection;
        }
        // esta funcion mantiene la base de datos activa cuando se hace una peticion, luego se apaga para evitar ataques y demas.
        getAll(collection, query) {
            return this.connect(). then(db => {
                return db
                .collection(collection)
                .find(query)
                .toArray();
            });
        }
    }

    module.exports = MongoLib;