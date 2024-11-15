/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SingleAnnouncementSchema } from '../models/SingleAnnouncementSchema';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InfoService {
    /**
     * Get Announcement
     * @returns SingleAnnouncementSchema OK
     * @throws ApiError
     */
    public static apiInfoApiGetAnnouncement(): CancelablePromise<SingleAnnouncementSchema> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/info/get_announcement',
        });
    }
}
