/**
 * Onshape REST API
 * The Onshape REST API consumed by all clients.
 *
 * OpenAPI spec version: 1.93
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class BTVersionOrWorkspaceParams {
    'name'?: string;
    'description'?: string;
    'microversionId'?: string;
    'readOnly'?: boolean;
    'isRelease'?: boolean;
    'fromHistory'?: boolean;
    'versionId'?: string;
    'documentId'?: string;
    'workspaceId'?: string;
    'clientInteractionMode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "microversionId",
            "baseName": "microversionId",
            "type": "string"
        },
        {
            "name": "readOnly",
            "baseName": "readOnly",
            "type": "boolean"
        },
        {
            "name": "isRelease",
            "baseName": "isRelease",
            "type": "boolean"
        },
        {
            "name": "fromHistory",
            "baseName": "fromHistory",
            "type": "boolean"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        },
        {
            "name": "clientInteractionMode",
            "baseName": "clientInteractionMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTVersionOrWorkspaceParams.attributeTypeMap;
    }
}

