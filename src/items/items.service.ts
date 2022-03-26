import { Injectable } from '@nestjs/common';
import { Item } from 'src/items/item.model';
@Injectable()
export class ItemsService {
  private items: Item[] = [];

  findAll(): Item[] {
    return this.items;
  }

  create(item: Item): Item {
    this.items.push(item);
    return item;
  }
}
