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

import { BTBelScriptLibraryVersion } from './bTBelScriptLibraryVersion';
import { BTConnection } from './bTConnection';
import { BTFeatureState } from './bTFeatureState';
import { BTMFeature } from './bTMFeature';

export class BTFeatureDefinitionResponse {
    'feature'?: BTMFeature;
    'featureState'?: BTFeatureState;
    'belScriptLibraryVersion'?: BTBelScriptLibraryVersion;
    'sourceMicroversion'?: string;
    'rejectMicroversionSkew'?: boolean;
    'serializationVersion'?: string;
    'libraryVersion'?: number;
    'microversionSkew'?: boolean;
    'typeId'?: number;
    'connectionSource'?: BTConnection;
    'exportTypeName'?: string;
    'unknownClass'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "feature",
            "baseName": "feature",
            "type": "BTMFeature"
        },
        {
            "name": "featureState",
            "baseName": "featureState",
            "type": "BTFeatureState"
        },
        {
            "name": "belScriptLibraryVersion",
            "baseName": "belScriptLibraryVersion",
            "type": "BTBelScriptLibraryVersion"
        },
        {
            "name": "sourceMicroversion",
            "baseName": "sourceMicroversion",
            "type": "string"
        },
        {
            "name": "rejectMicroversionSkew",
            "baseName": "rejectMicroversionSkew",
            "type": "boolean"
        },
        {
            "name": "serializationVersion",
            "baseName": "serializationVersion",
            "type": "string"
        },
        {
            "name": "libraryVersion",
            "baseName": "libraryVersion",
            "type": "number"
        },
        {
            "name": "microversionSkew",
            "baseName": "microversionSkew",
            "type": "boolean"
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
        return BTFeatureDefinitionResponse.attributeTypeMap;
    }
}

