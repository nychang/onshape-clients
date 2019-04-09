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
import { BTUserBasicSummaryInfo } from './bTUserBasicSummaryInfo';

export class BTPurchaseUserInfo {
    'user'?: BTUserBasicSummaryInfo;
    'consumedQuantity'?: number;
    'purchaseState'?: number;
    'purchase'?: BTPurchaseInfo;
    'name'?: string;
    'id'?: string;
    'href'?: string;
    'viewRef'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "BTUserBasicSummaryInfo"
        },
        {
            "name": "consumedQuantity",
            "baseName": "consumedQuantity",
            "type": "number"
        },
        {
            "name": "purchaseState",
            "baseName": "purchaseState",
            "type": "number"
        },
        {
            "name": "purchase",
            "baseName": "purchase",
            "type": "BTPurchaseInfo"
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
        return BTPurchaseUserInfo.attributeTypeMap;
    }
}

