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


export class BTAdminRolePermissionParams {
    'method'?: string;
    'allowed'?: boolean;
    'resourcePath'?: string;
    'resourceLabel'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "allowed",
            "baseName": "allowed",
            "type": "boolean"
        },
        {
            "name": "resourcePath",
            "baseName": "resourcePath",
            "type": "string"
        },
        {
            "name": "resourceLabel",
            "baseName": "resourceLabel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTAdminRolePermissionParams.attributeTypeMap;
    }
}

