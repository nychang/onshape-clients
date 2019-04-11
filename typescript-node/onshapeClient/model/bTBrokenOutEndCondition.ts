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

import { BTConnection } from './bTConnection';
import { BTVector3d } from './bTVector3d';

export class BTBrokenOutEndCondition {
    'uptoPoint3d'?: BTVector3d;
    'hasUptoPoint'?: boolean;
    'hasOffset'?: boolean;
    'offsetDistance'?: number;
    'offsetOppositeDirection'?: boolean;
    'uptoPoint'?: Array<number>;
    'typeId'?: number;
    'connectionSource'?: BTConnection;
    'exportTypeName'?: string;
    'unknownClass'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uptoPoint3d",
            "baseName": "uptoPoint3d",
            "type": "BTVector3d"
        },
        {
            "name": "hasUptoPoint",
            "baseName": "hasUptoPoint",
            "type": "boolean"
        },
        {
            "name": "hasOffset",
            "baseName": "hasOffset",
            "type": "boolean"
        },
        {
            "name": "offsetDistance",
            "baseName": "offsetDistance",
            "type": "number"
        },
        {
            "name": "offsetOppositeDirection",
            "baseName": "offsetOppositeDirection",
            "type": "boolean"
        },
        {
            "name": "uptoPoint",
            "baseName": "uptoPoint",
            "type": "Array<number>"
        },
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number"
        },
        {
            "name": "connectionSource",
            "baseName": "connectionSource",
            "type": "BTConnection"
        },
        {
            "name": "exportTypeName",
            "baseName": "exportTypeName",
            "type": "string"
        },
        {
            "name": "unknownClass",
            "baseName": "unknownClass",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTBrokenOutEndCondition.attributeTypeMap;
    }
}
