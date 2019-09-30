// hacia donde va la persistencia (logica de negocio)
// const planstMocks = require('../utils/mocks/plantsMocks');
const MongoLib = require('../lib/mongo')

class PlantsServices {
    constructor(){   
        this.collection = 'plants';
        this.mongoDb = new MongoLib();  
    }
    async getPlants({ tags }){
        const query = tags && {Sin: {tags}}
        const plants = await this.mongoDb.getAll(this.collection, query);
        return plants || [];
    }
}

module.exports = PlantsServices;