import { booksDatabase, generateBooksId } from '../database/database'
import { IBook, TCreateBody, TUpdateBody } from '../interfaces/books.interface'
import { IBooksServices } from '../interfaces/books.interface'


export class BooksServices implements IBooksServices {
    create(body: TCreateBody): IBook {
        const date = new Date()

        const newBook: IBook = {
            id: generateBooksId(),
            name: body.name,
            pages: body.pages,
            category: body.category,
            createdAt: date,
            updatedAt: date
        };

        booksDatabase.push(newBook)

        return newBook
    }

    getAll(search?: string): IBook[] {
        if (search) {
            return booksDatabase.filter(book => book.name.includes(search) || book.category?.includes(search))
        }
        return booksDatabase
    }

    getOne(id: number): IBook | undefined {
        return booksDatabase.find(book => book.id === id)
    }

    delete(id: number): void {
        const index = booksDatabase.findIndex(book => book.id === id)
        if (index !== -1) {
            booksDatabase.splice(index, 1)
        }
    }

    update(id: number, body: TUpdateBody): IBook | undefined {
        const book = booksDatabase.find(book => book.id === id)
        if (book) {
            Object.assign(book, body, { updateAt: new Date() })
            return book
        }
        return undefined
    }
}
