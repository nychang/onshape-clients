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


export class BTUploadParams {
    'name'?: string;
    'state'?: string;
    'elementId'?: string;
    'documentName'?: string;
    'cloudStorageAccountId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "documentName",
            "baseName": "documentName",
            "type": "string"
        },
        {
            "name": "cloudStorageAccountId",
            "baseName": "cloudStorageAccountId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTUploadParams.attributeTypeMap;
    }
}
