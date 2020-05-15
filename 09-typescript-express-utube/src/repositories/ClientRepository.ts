import Client from '../models/Client';

export default class ClientRepository {
  private clients: Array<Client>;

  constructor() {
    this.clients = [];
  }

  public findAll(): Array<Client> {
    return this.clients;
  }

  public findByCode(code: number): Client | undefined {
    return this.clients.find(v => v.code === code);
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Client): Client {
    const clients = new Client({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.clients.push(clients));
    return clients;
  }
}
