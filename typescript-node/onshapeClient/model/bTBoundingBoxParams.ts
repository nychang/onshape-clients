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


export class BTBoundingBoxParams {
    'workspaceId'?: string;
    'elementId'?: string;
    'partQuery'?: string;
    'partId'?: string;
    'includeWireBodies'?: boolean;
    'displayStateId'?: string;
    'documentId'?: string;
    'sketchId'?: string;
    'elementMicroversionId'?: string;
    'includeHidden'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "partQuery",
            "baseName": "partQuery",
            "type": "string"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string"
        },
        {
            "name": "includeWireBodies",
            "baseName": "includeWireBodies",
            "type": "boolean"
        },
        {
            "name": "displayStateId",
            "baseName": "displayStateId",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "sketchId",
            "baseName": "sketchId",
            "type": "string"
        },
        {
            "name": "elementMicroversionId",
            "baseName": "elementMicroversionId",
            "type": "string"
        },
        {
            "name": "includeHidden",
            "baseName": "includeHidden",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTBoundingBoxParams.attributeTypeMap;
    }
}
