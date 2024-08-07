import { Router } from 'express'
import { BooksControllers } from '../controllers/books.controllers'
import { checkBookExists } from '../middleware/checkBookExistis'
import { checkBookNameUnique } from '../middleware/chekBookNameUnique'


export const booksRouter = Router()

const booksControllers = new BooksControllers()

// Rota para criar um livro
booksRouter.post('/', checkBookNameUnique, (req, res) => booksControllers.create(req, res))

// Rota para obter todos os livros
booksRouter.get('/', (req, res) => booksControllers.getAll(req, res))

// Rota para obter um livro específico
booksRouter.get('/:id', checkBookExists, (req, res) => booksControllers.getOne(req, res))

// Rota para atualizar um livro
booksRouter.patch('/:id', checkBookExists, checkBookNameUnique, (req, res) => booksControllers.update(req, res))

// Rota para excluir um livro
booksRouter.delete('/:id', checkBookExists, (req, res) => booksControllers.delete(req, res))
