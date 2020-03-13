// 'use strict';

// const express = require('express');
// const router = express.Router();
// const BaseDatesBebidas = require('../models/BaseDatesBebidas.js');

// router.get('/bebidas', async (req, res, next) => {
//   try {
//     const listaBebidas = await BaseDatesBebidas.find();
//     res.status(200).json({ listaBebidas });
//   } catch (error) {
//     next(error);
//   }
// });


// router.post('/bebidas/new', async (req, res, next) => {
//   const nuevaBebida = req.body;
//   try {
//     const crearBebida = await BaseDatesBebidas.create(nuevaBebida);
//     res.status(200).json(crearBebida);
//   } catch (error) {
//     next(error);
//   }
// });


// router.get('/actuaciones/:id/details', async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const detail = await BaseDates.findById(id);
//     res.status(200).json(detail);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put('/actuaciones/:id/update', async (req, res, next) => {
//   const { id } = req.params;
//   const modificar = req.body;
//   try {
//     const modificarActuacion = await BaseDates.findByIdAndUpdate(id, modificar, { new: true });
//     res.status(200).json(modificarActuacion);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/actuaciones/:id/delete', async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     await BaseDates.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Acuación Eliminada' });
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
