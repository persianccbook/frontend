/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookSchema } from '../models/BookSchema';
import type { ChapterSchema } from '../models/ChapterSchema';
import type { GenreSchema } from '../models/GenreSchema';
import type { PageSchema } from '../models/PageSchema';
import type { PaginatedBooks } from '../models/PaginatedBooks';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BooksService {
    /**
     * Get All Books
     * @param limit
     * @param offset
     * @returns PaginatedBooks OK
     * @throws ApiError
     */
    public static apiBookApiGetAllBooks(
        limit: number = 1,
        offset?: number,
    ): CancelablePromise<PaginatedBooks> {
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
     * @returns BookSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetBook(
        bookId: number,
    ): CancelablePromise<BookSchema> {
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
     * @returns BookSchema OK
     * @throws ApiError
     */
    public static apiBookApiTopBooks(): CancelablePromise<Array<BookSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/top_books',
        });
    }
    /**
     * Get Book Chapters
     * @param bookId
     * @returns ChapterSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetBookChapters(
        bookId: number,
    ): CancelablePromise<Array<ChapterSchema>> {
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
     * @returns PageSchema OK
     * @throws ApiError
     */
    public static apiBookApiGetChapterPages(
        bookId: number,
        chapterNumber: number,
    ): CancelablePromise<Array<PageSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/books/get_chapter_',
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
