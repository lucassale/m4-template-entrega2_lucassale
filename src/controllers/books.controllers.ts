import { Request, Response } from "express"
import { BooksServices } from "../services/books.services"


export interface IBookControllers {
    create(req: Request, res: Response): Response
    getAll(req: Request, res: Response): Response
    getOne(req: Request, res: Response): Response
    delete(req: Request, res: Response): Response
    update(req: Request, res: Response): Response
}

export class BooksControllers implements IBookControllers {
    create(req: Request, res: Response): Response {
        
        const booksServices = new BooksServices()
        
        const create = booksServices.create(req.body)

        return res.status(201).json(create)
    }

     getAll(req: Request, res: Response): Response {
        const booksServices = new BooksServices()
        const books = booksServices.getAll()
        return res.status(200).json(books)
    }

    getOne(req: Request, res: Response): Response {
        const booksServices = new BooksServices()
        const book = booksServices.getOne(Number(req.params.id))
        return res.status(200).json(book)
    }

    delete(req: Request, res: Response): Response {
        const booksServices = new BooksServices()
        booksServices.delete(Number(req.params.id))
        return res.status(204).send()
    }

    update(req: Request, res: Response): Response {
        const booksServices = new BooksServices()
        const updatedBook = booksServices.update(Number(req.params.id), req.body)
        return res.status(200).json(updatedBook)
    }

}
