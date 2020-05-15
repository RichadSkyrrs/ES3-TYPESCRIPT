import ProductRepository from '../repositories/ClienteRepository';
import Product from '../models/Cliente';
import Cliente from '../models/Cliente';

export default class CreateClienteService {
  private repository: ClienteRepository;

  constructor(repository: ClienteRepository) {
    this.repository = repository;
  }

  public execute({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Cliente): Cliente {
    const product = this.repository.findByCode(code);
    if (product) {
      throw Error('Produto já cadastrado');
    } else {
      const p = new Cliente({
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
