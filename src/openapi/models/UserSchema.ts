/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserSchema = {
    id?: (number | null);
    email: string;
    first_name?: (string | null);
    last_name?: (string | null);
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     */
    is_superuser?: boolean;
    is_verified?: boolean;
};

