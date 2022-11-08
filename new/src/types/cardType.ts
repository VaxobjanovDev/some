interface iStock {
  recycleTitle?: string,
  giftTitle?: string,
  phoneStockTitle?: string,
  stockIphoneTitle?: string,
  discount?: number,
  gift?: string,
  stock?: number,
  stockIphone?: number
}

export interface CardType {
  id: number,
  imgLink: string,
  title: string,
  price: number,
  dividePrice: number,
  tip: string,
  internet: string,
  system: string,
  installmentPrice:number,
  stock:iStock
}

export interface StockProps{
  stock:iStock
}

export interface PropsCard {
  cardInfo: CardType
}

  export interface DataType{
  data:[PropsCard]
}

