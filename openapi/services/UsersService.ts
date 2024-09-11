/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseSchema } from '../models/ApiResponseSchema';
import type { UserSchema } from '../models/UserSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Get All Users
     * Retrieve all users from the database. Only accessible by superusers.
     *
     * Args:
     * request: The HTTP request object.
     *
     * Returns:
     * ApiResponseSchema: A schema containing a list of users and a success message.
     * @returns UserSchema OK
     * @throws ApiError
     */
    public static apiUserApiGetAllUsers(): CancelablePromise<Array<UserSchema>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/',
        });
    }
    /**
     * Get User
     * Retrieve a specific user by their ID. Accessible by superusers or the user themselves.
     *
     * Args:
     * request: The HTTP request object.
     * user_id (int): The ID of the user to retrieve.
     *
     * Returns:
     * ApiResponseSchema: A schema containing user details and a success message.
     * ApiResponseSchema: A schema indicating failure if the user is not found.
     * @param userId
     * @returns UserSchema OK
     * @throws ApiError
     */
    public static apiUserApiGetUser(
        userId: number,
    ): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/users/{user_id}',
            path: {
                'user_id': userId,
            },
        });
    }
    /**
     * Update User
     * Update user details for a specific user. Only the user themselves or superusers can perform updates.
     *
     * Args:
     * request: The HTTP request object.
     * user_id (int): The ID of the user to update.
     * payload (UserSchema): The data to update for the user.
     *
     * Returns:
     * ApiResponseSchema: A schema containing updated user details and a success message.
     * ApiResponseSchema: A schema indicating failure if the user is not found or update fails.
     * @param userId
     * @param requestBody
     * @returns UserSchema OK
     * @throws ApiError
     */
    public static apiUserApiUpdateUser(
        userId: number,
        requestBody: UserSchema,
    ): CancelablePromise<UserSchema> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/users/{user_id}',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * Delete User
     * Delete a specific user by their ID. Only accessible by superusers or user themselves.
     *
     * Args:
     * request: The HTTP request object.
     * user_id (int): The ID of the user to delete.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success or failure of the delete operation.
     * @param userId
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiUserApiDeleteUser(
        userId: number,
    ): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/users/{user_id}',
            path: {
                'user_id': userId,
            },
        });
    }
}
