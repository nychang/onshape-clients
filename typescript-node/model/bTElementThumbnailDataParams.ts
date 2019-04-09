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


export class BTElementThumbnailDataParams {
    'encodedBTDBConfigurationId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "encodedBTDBConfigurationId",
            "baseName": "encodedBTDBConfigurationId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTElementThumbnailDataParams.attributeTypeMap;
    }
}

