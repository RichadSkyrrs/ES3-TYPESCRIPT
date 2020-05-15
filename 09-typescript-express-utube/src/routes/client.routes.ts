import { Router } from 'express';
import ClientRepository from '../repositories/ClientRepository';
import CreateClientService from '../services/CreateClientService';
import Cliente from '../models/Client';

const clientRouter = Router();
const clientRepository = new ClientRepository();

clientRouter.get('/', (request, response) => {
  response.json(clientRepository.findAll());
});

clientRouter.post('/', (request, response) => {
  try {
    const service = new CreateClientService(clientRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const Cliente = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    response.status(201).json(Cliente);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default clientRouter;
