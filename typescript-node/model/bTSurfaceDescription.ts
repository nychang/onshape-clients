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

export class BTSurfaceDescription {
    'type'?: BTSurfaceDescription.TypeEnum;
    'typeId'?: number;
    'connectionSource'?: BTConnection;
    'exportTypeName'?: string;
    'unknownClass'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BTSurfaceDescription.TypeEnum"
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
        return BTSurfaceDescription.attributeTypeMap;
    }
}

export namespace BTSurfaceDescription {
    export enum TypeEnum {
        PLANE = <any> 'PLANE',
        CYLINDER = <any> 'CYLINDER',
        CONE = <any> 'CONE',
        SPHERE = <any> 'SPHERE',
        TORUS = <any> 'TORUS',
        SPUN = <any> 'SPUN',
        SWEEP = <any> 'SWEEP',
        OFFSET = <any> 'OFFSET',
        BLEND = <any> 'BLEND',
        BSURFACE = <any> 'BSURFACE',
        OTHER = <any> 'OTHER',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
