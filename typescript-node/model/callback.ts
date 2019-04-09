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

import { PathItem } from './pathItem';

export class Callback extends null<String, PathItem> {
    'extensions'?: { [key: string]: any; };
    'get$ref'?: string;
    'empty'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "extensions",
            "baseName": "extensions",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "get$ref",
            "baseName": "get$ref",
            "type": "string"
        },
        {
            "name": "empty",
            "baseName": "empty",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Callback.attributeTypeMap);
    }
}

