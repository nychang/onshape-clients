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


export class BTMetadataSchemaParams {
    'objectType'?: number;
    'ownerId'?: string;
    'ownerType'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "number"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "ownerType",
            "baseName": "ownerType",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return BTMetadataSchemaParams.attributeTypeMap;
    }
}

