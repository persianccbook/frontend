/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnouncementSchema } from './AnnouncementSchema';
import type { ErrorSchema } from './ErrorSchema';
export type SingleAnnouncementDataSchema = {
    message: string;
    payload: AnnouncementSchema;
    error?: (ErrorSchema | null);
};

