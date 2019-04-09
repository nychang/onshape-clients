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

import { BTPurchaseInfo } from './bTPurchaseInfo';

export class BTListResponseBTPurchaseInfo {
    'href'?: string;
    'next'?: string;
    'items'?: Array<BTPurchaseInfo>;
    'previous'?: string;

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
            "name": "items",
            "baseName": "items",
            "type": "Array<BTPurchaseInfo>"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTListResponseBTPurchaseInfo.attributeTypeMap;
    }
}

