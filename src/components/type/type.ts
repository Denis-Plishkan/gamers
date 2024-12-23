export interface ILinks {
  name: string;
  path: string;
  title?: string;
}  

export interface DataItem {
  id: number;
  title: string;
  name: string;
  brand: string;
  offer: number;
  rating: number;
  price: number;
  color: string;
  type: string;
  description: string;
  costDelivery: string;
  img: {
    default: string;
    webP: string;
  };
  group?: string;
}
