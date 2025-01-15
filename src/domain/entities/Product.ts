export class Product {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public description: string,
    public price: number,
    public stock: number,
    public image_url: string,
  ) {}
}
