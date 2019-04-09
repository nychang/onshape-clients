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


export class RequestOptions {
    'apiKey'?: string;
    'stripeVersion'?: string;
    'idempotencyKey'?: string;
    'stripeAccount'?: string;
    'connectTimeout'?: number;
    'readTimeout'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiKey",
            "baseName": "apiKey",
            "type": "string"
        },
        {
            "name": "stripeVersion",
            "baseName": "stripeVersion",
            "type": "string"
        },
        {
            "name": "idempotencyKey",
            "baseName": "idempotencyKey",
            "type": "string"
        },
        {
            "name": "stripeAccount",
            "baseName": "stripeAccount",
            "type": "string"
        },
        {
            "name": "connectTimeout",
            "baseName": "connectTimeout",
            "type": "number"
        },
        {
            "name": "readTimeout",
            "baseName": "readTimeout",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return RequestOptions.attributeTypeMap;
    }
}

