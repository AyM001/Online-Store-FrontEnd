import {Manufacturer} from '../../manufacturers/model/manufacturer';
import {Category} from '../../categories/model/category';

export class Product {
  id: number;
  name: string;
  price: number;
  manufacturerDto: Manufacturer;
  categoryDto: Category;
}
