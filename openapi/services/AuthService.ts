/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponseSchema } from '../models/ApiResponseSchema';
import type { ChangePasswordSchema } from '../models/ChangePasswordSchema';
import type { EmailVerificationSchema } from '../models/EmailVerificationSchema';
import type { PasswordResetConfirmSchema } from '../models/PasswordResetConfirmSchema';
import type { PasswordResetRequestSchema } from '../models/PasswordResetRequestSchema';
import type { SignInSchema } from '../models/SignInSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Get Csrf Token
     * Retrieve the CSRF token for the current session.
     *
     * Args:
     * request: The HTTP request object.
     *
     * Returns:
     * ApiResponseSchema: A schema containing the CSRF token and a success message.
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiGetCsrfToken(): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/auth/set-csrf-token',
        });
    }
    /**
     * Login View
     * Authenticate a user and log them in.
     *
     * Args:
     * request: The HTTP request object.
     * payload (SignInSchema): The user's login credentials.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success or failure of the login attempt.
     * @param requestBody
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiLoginView(
        requestBody: SignInSchema,
    ): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Logout View
     * Log the current user out of the system.
     *
     * Args:
     * request: The HTTP request object.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success of the logout operation.
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiLogoutView(): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/logout',
        });
    }
    /**
     * Register
     * Register a new user and send a verification email.
     *
     * Args:
     * request: The HTTP request object.
     * payload (SignInSchema): The user's registration details.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success or failure of the registration process.
     * @param requestBody
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiRegister(
        requestBody: SignInSchema,
    ): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/register',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Verify Email
     * Verify the user's email address using the provided token.
     *
     * Args:
     * request: The HTTP request object.
     * payload (EmailVerificationSchema): The email verification details including token and user ID.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success or failure of the email verification process.
     * @param requestBody
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiVerifyEmail(
        requestBody: EmailVerificationSchema,
    ): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/verify-email',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Change Password
     * Change the password for the authenticated user.
     *
     * Args:
     * request: The HTTP request object.
     * data (ChangePasswordSchema): The current and new passwords.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success or failure of the password change operation.
     * @param requestBody
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiChangePassword(
        requestBody: ChangePasswordSchema,
    ): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/change-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Request Password Reset
     * Request a password reset and send a reset email.
     *
     * Args:
     * request: The HTTP request object.
     * data (PasswordResetRequestSchema): The email address for password reset.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success or failure of the password reset request.
     * @param requestBody
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiRequestPasswordReset(
        requestBody: PasswordResetRequestSchema,
    ): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Password Reset Confirm
     * Confirm and complete the password reset process.
     *
     * Args:
     * request: The HTTP request object.
     * data (PasswordResetConfirmSchema): The new password and token details.
     *
     * Returns:
     * ApiResponseSchema: A schema indicating success or failure of the password reset confirmation.
     * @param requestBody
     * @returns ApiResponseSchema OK
     * @throws ApiError
     */
    public static apiAuthApiPasswordResetConfirm(
        requestBody: PasswordResetConfirmSchema,
    ): CancelablePromise<ApiResponseSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/auth/reset-password-confirm',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
