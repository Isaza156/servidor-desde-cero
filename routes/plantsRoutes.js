const express = require('express');
const PlantsServices = require('../services/plantsServices');



function plantsApi(app) {
    const router = express.Router();
    app.use('/api/plants', router);
//crear un objeto de la clase PlanstServices
const plantsServices = new PlantsServices();

    router.get('/', async (req, res, next) => {
        const { tags } = req.query;
        try {
            const plants = await plantsServices.getPlants({ tags })
            res.status(200).json({
                data: plants,
                message: "plants listed"
            })
        } catch (err) {
            next(err)
        }
    })
}

module.exports = plantsApi;
