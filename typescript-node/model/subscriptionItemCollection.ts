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

import { RequestOptions } from './requestOptions';
import { SubscriptionItem } from './subscriptionItem';

export class SubscriptionItemCollection {
    'data'?: Array<SubscriptionItem>;
    'totalCount'?: number;
    'hasMore'?: boolean;
    '_requestOptions'?: RequestOptions;
    'requestParams'?: { [key: string]: any; };
    'url'?: string;
    'count'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<SubscriptionItem>"
        },
        {
            "name": "totalCount",
            "baseName": "totalCount",
            "type": "number"
        },
        {
            "name": "hasMore",
            "baseName": "hasMore",
            "type": "boolean"
        },
        {
            "name": "_requestOptions",
            "baseName": "requestOptions",
            "type": "RequestOptions"
        },
        {
            "name": "requestParams",
            "baseName": "requestParams",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionItemCollection.attributeTypeMap;
    }
}

