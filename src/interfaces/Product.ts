export interface IProduct {
  id: number
  name: string
  description: string
  imageName: string
  price: number
}

export interface IProductPagination {
  pageSize?: number
  page?: number
}

export interface IProductResponse {
  content: IProduct[]
}