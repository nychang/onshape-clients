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


export class BTMoveElementInfo {
    'newDocumentVersionId'?: string;
    'errorMessage'?: string;
    'newDocumentId'?: string;
    'elementOriginalToNewMap'?: { [key: string]: string; };
    'isNewDocument'?: boolean;
    'newDocumentName'?: string;
    'newWorkspaceId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "newDocumentVersionId",
            "baseName": "newDocumentVersionId",
            "type": "string"
        },
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string"
        },
        {
            "name": "newDocumentId",
            "baseName": "newDocumentId",
            "type": "string"
        },
        {
            "name": "elementOriginalToNewMap",
            "baseName": "elementOriginalToNewMap",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "isNewDocument",
            "baseName": "isNewDocument",
            "type": "boolean"
        },
        {
            "name": "newDocumentName",
            "baseName": "newDocumentName",
            "type": "string"
        },
        {
            "name": "newWorkspaceId",
            "baseName": "newWorkspaceId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTMoveElementInfo.attributeTypeMap;
    }
}
