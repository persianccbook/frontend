/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { api__book_schema__BookChaptersSchema__2 } from '../models/api__book_schema__BookChaptersSchema__2';
import type { BookPagesSchema } from '../models/BookPagesSchema';
import type { BookSchema } from '../models/BookSchema';
import type { GenreSchema } from '../models/GenreSchema';
import type { PaginatedBooksSchema } from '../models/PaginatedBooksSchema';
import type { SingleBookSchema } from '../models/SingleBookSchema';
import type { TopBooksSchema } from '../models/TopBooksSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BooksService {
    /**
     * Get All Books
     * @param limit
     * @param offset
     * @returns PaginatedBooksSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetAllBooks(
        limit: number = 1,
        offset?: number,
    ): CancelablePromise<PaginatedBooksSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/get_all_books',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get Book
     * @param bookId
     * @returns SingleBookSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetBook(
        bookId: number,
    ): CancelablePromise<SingleBookSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/get_book',
            query: {
                'book_id': bookId,
            },
        });
    }
    /**
     * Top Books
     * @returns TopBooksSchema OK
     * @throws ApiError
     */
    public static apiBookApiTopBooks(): CancelablePromise<TopBooksSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/top_books',
        });
    }
    /**
     * Get Book Chapters
     * @param bookId
     * @returns api__book_schema__BookChaptersSchema__2 OK
     * @throws ApiError
     */
    public static apiBookApiGetBookChapters(
        bookId: number,
    ): CancelablePromise<api__book_schema__BookChaptersSchema__2> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/get_book_chapters',
            query: {
                'book_id': bookId,
            },
        });
    }
    /**
     * Get Chapter Pages
     * @param bookId
     * @param chapterNumber
     * @returns BookPagesSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetChapterPages(
        bookId: number,
        chapterNumber: number,
    ): CancelablePromise<BookPagesSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/get_chapter_pages',
            query: {
                'book_id': bookId,
                'chapter_number': chapterNumber,
            },
        });
    }
    /**
     * Get Genres
     * @returns GenreSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetGenres(): CancelablePromise<Array<GenreSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/get_genres',
        });
    }
    /**
     * Get Genre Books
     * @returns BookSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetGenreBooks(): CancelablePromise<Array<BookSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/get_genre_books',
        });
    }
}
