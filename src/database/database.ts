import { IBook } from "../interfaces/books.interface"

export const booksDatabase: IBook[] = []

let id = 0

export const generateBooksId = () => {
    id++
    return id
}

/*
export const resetBooksDatabase = () =>{
    booksDatabase.length = 0
}
*/
