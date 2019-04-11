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

import { BTViewDataParams } from './bTViewDataParams';

export class BTCommentParams {
    'message'?: string;
    'id'?: string;
    'viewData'?: BTViewDataParams;
    'elementQuery'?: string;
    'elementFeature'?: string;
    'elementOccurrence'?: string;
    'assemblyFeature'?: string;
    'workspaceId'?: string;
    'elementId'?: string;
    'parentId'?: string;
    'versionId'?: string;
    'documentId'?: string;
    'assignee'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "viewData",
            "baseName": "viewData",
            "type": "BTViewDataParams"
        },
        {
            "name": "elementQuery",
            "baseName": "elementQuery",
            "type": "string"
        },
        {
            "name": "elementFeature",
            "baseName": "elementFeature",
            "type": "string"
        },
        {
            "name": "elementOccurrence",
            "baseName": "elementOccurrence",
            "type": "string"
        },
        {
            "name": "assemblyFeature",
            "baseName": "assemblyFeature",
            "type": "string"
        },
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
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
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
            "name": "assignee",
            "baseName": "assignee",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTCommentParams.attributeTypeMap;
    }
}
