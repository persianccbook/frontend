/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorSchema } from './ErrorSchema';
import type { PageSchema } from './PageSchema';
export type PageDataSchema = {
    message: string;
    payload: Array<PageSchema>;
    error?: (ErrorSchema | null);
};

