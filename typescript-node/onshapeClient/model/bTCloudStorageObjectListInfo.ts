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

import { BTCloudStorageObjectInfo } from './bTCloudStorageObjectInfo';
import { CloudObjectPathSegment } from './cloudObjectPathSegment';

export class BTCloudStorageObjectListInfo {
    'href'?: string;
    'next'?: string;
    'pathToRoot'?: Array<CloudObjectPathSegment>;
    'items'?: Array<BTCloudStorageObjectInfo>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "pathToRoot",
            "baseName": "pathToRoot",
            "type": "Array<CloudObjectPathSegment>"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BTCloudStorageObjectInfo>"
        }    ];

    static getAttributeTypeMap() {
        return BTCloudStorageObjectListInfo.attributeTypeMap;
    }
}
