import { uuid } from 'uuidv4';

export default class Client {
  id: string;

  code: number;

  description: string;

  buyPrice: number;

  sellPrice: number;

  tags: Array<Client>;

  lovers: number;

  constructor({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Omit<Client, 'id'>) {
    this.buyPrice = buyPrice;
    this.code = code;
    this.sellPrice = sellPrice;
    this.buyPrice = buyPrice;
    this.tags = tags;
    this.lovers = lovers;
    this.description = description;
    this.id = uuid();
  }
}
