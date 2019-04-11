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


export class BTStartEditInContextParams {
    'microversionId'?: string;
    'encodedConfiguration'?: string;
    'description'?: string;
    'contextId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "string"
        },
        {
            "name": "encodedConfiguration",
            "baseName": "encodedConfiguration",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "contextId",
            "baseName": "contextId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTStartEditInContextParams.attributeTypeMap;
    }
}
