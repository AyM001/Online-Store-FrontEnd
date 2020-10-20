import {Orderline} from './orderline';

export class Order {
id: number;
username: string;
totalCost: number;
orderLineDtoModels: Orderline[] = [] ;
status: string;
}
