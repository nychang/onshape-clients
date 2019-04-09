/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.96
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BTRbacPermissionSchemeInfo } from './bTRbacPermissionSchemeInfo';

export class BTRbacPermissionSchemeListInfo {
    'defaultIndex'?: number;
    'href'?: string;
    'next'?: string;
    'items'?: Array<BTRbacPermissionSchemeInfo>;
    'previous'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "defaultIndex",
            "baseName": "defaultIndex",
            "type": "number"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BTRbacPermissionSchemeInfo>"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTRbacPermissionSchemeListInfo.attributeTypeMap;
    }
}

