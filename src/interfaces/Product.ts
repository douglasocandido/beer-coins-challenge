export interface IProduct {
  id: number
  name: string
  description: string
  imageName: string
  price: number
}

// export interface IExtratoForm {
//   tipoOperacao?: string
//   pageSize?: number
//   page?: number
// }

export interface IProductResponse {
  content: IProduct[]
}