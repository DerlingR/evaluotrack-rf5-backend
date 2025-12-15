import { Router } from 'express';
import {
  crearFicha,
  obtenerFichaPorExpediente,
  actualizarFicha,
  eliminarFicha
} from '../controllers/fichas.controller.js';

const router = Router();

router.post('/', crearFicha);
router.get('/expediente/:expedienteId', obtenerFichaPorExpediente);
router.put('/:id', actualizarFicha);
router.delete('/:id', eliminarFicha);

export default router;
