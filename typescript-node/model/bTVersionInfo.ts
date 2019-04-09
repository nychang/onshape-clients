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

import { BTThumbnailInfo } from './bTThumbnailInfo';
import { BTUserBasicSummaryInfo } from './bTUserBasicSummaryInfo';

export class BTVersionInfo {
    'parent'?: string;
    'type'?: string;
    'description'?: string;
    'microversion'?: string;
    'createdAt'?: Date;
    'modifiedAt'?: Date;
    'lastModifier'?: BTUserBasicSummaryInfo;
    'documentId'?: string;
    'thumbnail'?: BTThumbnailInfo;
    'creator'?: BTUserBasicSummaryInfo;
    'overrideDate'?: Date;
    'name'?: string;
    'id'?: string;
    'href'?: string;
    'viewRef'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "parent",
            "baseName": "parent",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "microversion",
            "baseName": "microversion",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "Date"
        },
        {
            "name": "lastModifier",
            "baseName": "lastModifier",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "BTThumbnailInfo"
        },
        {
            "name": "creator",
            "baseName": "creator",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "overrideDate",
            "baseName": "overrideDate",
            "type": "Date"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTVersionInfo.attributeTypeMap;
    }
}

