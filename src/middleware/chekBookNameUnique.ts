import { Request, Response, NextFunction } from 'express';
import { booksDatabase } from '../database/database';

export const checkBookNameUnique = (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    const bookId = Number(req.params.id);
    const bookExists = booksDatabase.some(book => book.name === name && book.id !== bookId);

    if (bookExists) {
        return res.status(409).json({ error: "Book already registered." });
    }

    next();
}
