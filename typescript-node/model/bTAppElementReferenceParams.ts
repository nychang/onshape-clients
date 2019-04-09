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


export class BTAppElementReferenceParams {
    'updateSketchInfo'?: boolean;
    'idTag'?: string;
    'revision'?: string;
    'partNumber'?: string;
    'targetVersionId'?: string;
    'pureSketch'?: boolean;
    'isSketchOnly'?: boolean;
    'targetConfiguration'?: string;
    'returnError'?: boolean;
    'hasDocumentMicroversions'?: boolean;
    'targetMicroversionId'?: string;
    'idTagMicroversionId'?: string;
    'trackNewVersions'?: boolean;
    'transactionId'?: string;
    'parentChangeId'?: string;
    'sketchId'?: string;
    'sketchIds'?: Array<string>;
    'targetDocumentId'?: string;
    'targetElementId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "updateSketchInfo",
            "baseName": "updateSketchInfo",
            "type": "boolean"
        },
        {
            "name": "idTag",
            "baseName": "idTag",
            "type": "string"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string"
        },
        {
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string"
        },
        {
            "name": "targetVersionId",
            "baseName": "targetVersionId",
            "type": "string"
        },
        {
            "name": "pureSketch",
            "baseName": "pureSketch",
            "type": "boolean"
        },
        {
            "name": "isSketchOnly",
            "baseName": "isSketchOnly",
            "type": "boolean"
        },
        {
            "name": "targetConfiguration",
            "baseName": "targetConfiguration",
            "type": "string"
        },
        {
            "name": "returnError",
            "baseName": "returnError",
            "type": "boolean"
        },
        {
            "name": "hasDocumentMicroversions",
            "baseName": "hasDocumentMicroversions",
            "type": "boolean"
        },
        {
            "name": "targetMicroversionId",
            "baseName": "targetMicroversionId",
            "type": "string"
        },
        {
            "name": "idTagMicroversionId",
            "baseName": "idTagMicroversionId",
            "type": "string"
        },
        {
            "name": "trackNewVersions",
            "baseName": "trackNewVersions",
            "type": "boolean"
        },
        {
            "name": "transactionId",
            "baseName": "transactionId",
            "type": "string"
        },
        {
            "name": "parentChangeId",
            "baseName": "parentChangeId",
            "type": "string"
        },
        {
            "name": "sketchId",
            "baseName": "sketchId",
            "type": "string"
        },
        {
            "name": "sketchIds",
            "baseName": "sketchIds",
            "type": "Array<string>"
        },
        {
            "name": "targetDocumentId",
            "baseName": "targetDocumentId",
            "type": "string"
        },
        {
            "name": "targetElementId",
            "baseName": "targetElementId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BTAppElementReferenceParams.attributeTypeMap;
    }
}

