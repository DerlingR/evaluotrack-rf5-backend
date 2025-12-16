import { Router } from 'express';
import {
  crearAnexo,
  listarAnexosPorExpediente,
  obtenerAnexo,
  eliminarAnexo,
  agregarCoordenadas,
  obtenerAnexosConCoordenadas
} from '../controllers/anexos.controller.js';

const router = Router();

router.post('/', crearAnexo);
router.get('/expediente/:expedienteId', listarAnexosPorExpediente);
router.get('/expediente/:expedienteId/coordenadas', obtenerAnexosConCoordenadas);
router.get('/:id', obtenerAnexo);
router.delete('/:id', eliminarAnexo);
router.post('/:id/coordenadas', agregarCoordenadas);

export default router;
