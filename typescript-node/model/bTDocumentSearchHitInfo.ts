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

import { BTESDocumentHit } from './bTESDocumentHit';

export class BTDocumentSearchHitInfo {
    'name'?: string;
    'type'?: string;
    'documentId'?: string;
    'highlightedFields'?: { [key: string]: Array<string>; };
    'sourceMap'?: { [key: string]: any; };
    'hit'?: BTESDocumentHit;
    'versionOrWorkspaceName'?: string;
    'elementName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "highlightedFields",
            "baseName": "highlightedFields",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "sourceMap",
            "baseName": "sourceMap",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "hit",
            "baseName": "hit",
            "type": "BTESDocumentHit"
        },
        {
            "name": "versionOrWorkspaceName",
            "baseName": "versionOrWorkspaceName",
            "type": "string"
        },
        {
            "name": "elementName",
            "baseName": "elementName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTDocumentSearchHitInfo.attributeTypeMap;
    }
}

