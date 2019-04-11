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


export class BTImportCloudObjectParams {
    'name'?: string;
    '_public'?: boolean;
    'ownerId'?: string;
    'mimeType'?: string;
    'ownerType'?: BTImportCloudObjectParams.OwnerTypeEnum;
    'cloudObjectId'?: string;
    'sizeBytes'?: number;
    'accessToken'?: string;
    'cloudStorageProvider'?: number;
    'cloudStorageAccountId'?: string;
    'url'?: string;
    'notifyUser'?: boolean;
    'unit'?: string;
    'splitAssembliesIntoMultipleDocuments'?: boolean;
    'flattenAssemblies'?: boolean;
    'getyAxisIsUp'?: boolean;
    'allowFaultyParts'?: boolean;
    'projectId'?: string;
    'parentId'?: string;
    'foreignId'?: string;
    'uploadId'?: string;
    'originalForeignId'?: string;
    'importWithinDocument'?: boolean;
    'blobElementId'?: string;
    'blobMicroversionId'?: string;
    'specifyUnits'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "_public",
            "baseName": "public",
            "type": "boolean"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        },
        {
            "name": "ownerType",
            "baseName": "ownerType",
            "type": "BTImportCloudObjectParams.OwnerTypeEnum"
        },
        {
            "name": "cloudObjectId",
            "baseName": "cloudObjectId",
            "type": "string"
        },
        {
            "name": "sizeBytes",
            "baseName": "sizeBytes",
            "type": "number"
        },
        {
            "name": "accessToken",
            "baseName": "accessToken",
            "type": "string"
        },
        {
            "name": "cloudStorageProvider",
            "baseName": "cloudStorageProvider",
            "type": "number"
        },
        {
            "name": "cloudStorageAccountId",
            "baseName": "cloudStorageAccountId",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "notifyUser",
            "baseName": "notifyUser",
            "type": "boolean"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        },
        {
            "name": "splitAssembliesIntoMultipleDocuments",
            "baseName": "splitAssembliesIntoMultipleDocuments",
            "type": "boolean"
        },
        {
            "name": "flattenAssemblies",
            "baseName": "flattenAssemblies",
            "type": "boolean"
        },
        {
            "name": "getyAxisIsUp",
            "baseName": "getyAxisIsUp",
            "type": "boolean"
        },
        {
            "name": "allowFaultyParts",
            "baseName": "allowFaultyParts",
            "type": "boolean"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        },
        {
            "name": "foreignId",
            "baseName": "foreignId",
            "type": "string"
        },
        {
            "name": "uploadId",
            "baseName": "uploadId",
            "type": "string"
        },
        {
            "name": "originalForeignId",
            "baseName": "originalForeignId",
            "type": "string"
        },
        {
            "name": "importWithinDocument",
            "baseName": "importWithinDocument",
            "type": "boolean"
        },
        {
            "name": "blobElementId",
            "baseName": "blobElementId",
            "type": "string"
        },
        {
            "name": "blobMicroversionId",
            "baseName": "blobMicroversionId",
            "type": "string"
        },
        {
            "name": "specifyUnits",
            "baseName": "specifyUnits",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return BTImportCloudObjectParams.attributeTypeMap;
    }
}

export namespace BTImportCloudObjectParams {
    export enum OwnerTypeEnum {
        USER = <any> 'USER',
        COMPANY = <any> 'COMPANY',
        ONSHAPE = <any> 'ONSHAPE'
    }
}