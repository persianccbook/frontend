/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactUsMessage } from '../models/ContactUsMessage';
import type { ContactUsSchema } from '../models/ContactUsSchema';
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
    /**
     * Contact Us
     * @param requestBody
     * @returns ContactUsSchema OK
     * @throws ApiError
     */
    public static apiInfoApiContactUs(
        requestBody: ContactUsMessage,
    ): CancelablePromise<ContactUsSchema> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/info/contact-us',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
