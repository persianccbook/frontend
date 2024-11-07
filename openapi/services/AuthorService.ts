/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedAuthorsSchema } from '../models/PaginatedAuthorsSchema';
import type { PaginatedBooksSchema } from '../models/PaginatedBooksSchema';
import type { SingleAuthorSchema } from '../models/SingleAuthorSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthorService {
    /**
     * Get All Authors
     * @param limit
     * @param offset
     * @returns PaginatedAuthorsSchema OK
     * @throws ApiError
     */
    public static apiAuthorApiGetAllAuthors(
        limit: number = 1,
        offset?: number,
    ): CancelablePromise<PaginatedAuthorsSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/authors/get_all_authors',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get Author
     * @param authorId
     * @returns SingleAuthorSchema OK
     * @throws ApiError
     */
    public static apiAuthorApiGetAuthor(
        authorId: number,
    ): CancelablePromise<SingleAuthorSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/authors/get_author',
            query: {
                'author_id': authorId,
            },
        });
    }
    /**
     * Get Author Books
     * @param authorId
     * @param limit
     * @param offset
     * @returns PaginatedBooksSchema OK
     * @throws ApiError
     */
    public static apiAuthorApiGetAuthorBooks(
        authorId: number,
        limit: number = 1,
        offset?: number,
    ): CancelablePromise<PaginatedBooksSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/authors/get_author_books',
            query: {
                'author_id': authorId,
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
