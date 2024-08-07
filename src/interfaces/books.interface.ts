export interface IBook {
    id: number
    name: string
    pages: number
    category?: string
    createdAt: Date
    updatedAt: Date
}

export type TCreateBody  = Pick < IBook, 'name' | 'pages' | 'category' >
export type TUpdateBody = Partial < IBook > 


export interface IBooksServices {
    create(body: TCreateBody): IBook
    getAll(search?: string): IBook[]
    getOne(id: number): IBook | undefined
    delete(id: number): void
    update(id: number, body: TUpdateBody): IBook | undefined
}