import ClientRepository from '../repositories/ClientRepository';
import Client from '../models/Client';

export default class CreateClientService {
  private repository: ClientRepository;

  constructor(repository: ClientRepository) {
    this.repository = repository;
  }

  public execute({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Client): Client {
    const product = this.repository.findByCode(code);
    if (product) {
      throw Error('Cliente já cadastrado');
    } else {
      const p = new Client({
        buyPrice,
        code,
        description,
        lovers,
        sellPrice,
        tags,
      });
      this.repository.save(p);
      return p;
    }
  }
}
