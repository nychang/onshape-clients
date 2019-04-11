"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var BTTranslateInternalParams = /** @class */ (function () {
    function BTTranslateInternalParams() {
    }
    BTTranslateInternalParams.getAttributeTypeMap = function () {
        return BTTranslateInternalParams.attributeTypeMap;
    };
    BTTranslateInternalParams.discriminator = undefined;
    BTTranslateInternalParams.attributeTypeMap = [
        {
            "name": "modelScope",
            "baseName": "modelScope",
            "type": "BTDocumentScope"
        },
        {
            "name": "cloudObjectId",
            "baseName": "cloudObjectId",
            "type": "string"
        },
        {
            "name": "partIds",
            "baseName": "partIds",
            "type": "string"
        },
        {
            "name": "triggerAutoDownload",
            "baseName": "triggerAutoDownload",
            "type": "boolean"
        },
        {
            "name": "fromUserId",
            "baseName": "fromUserId",
            "type": "string"
        },
        {
            "name": "cloudStorageAccountId",
            "baseName": "cloudStorageAccountId",
            "type": "string"
        },
        {
            "name": "connectionId",
            "baseName": "connectionId",
            "type": "string"
        },
        {
            "name": "emailAttachment",
            "baseName": "emailAttachment",
            "type": "boolean"
        },
        {
            "name": "emailLink",
            "baseName": "emailLink",
            "type": "boolean"
        },
        {
            "name": "emailSubject",
            "baseName": "emailSubject",
            "type": "string"
        },
        {
            "name": "emailMessage",
            "baseName": "emailMessage",
            "type": "string"
        },
        {
            "name": "emailTo",
            "baseName": "emailTo",
            "type": "Array<string>"
        },
        {
            "name": "sendCopyToMe",
            "baseName": "sendCopyToMe",
            "type": "boolean"
        },
        {
            "name": "formatName",
            "baseName": "formatName",
            "type": "string"
        },
        {
            "name": "notifyUser",
            "baseName": "notifyUser",
            "type": "boolean"
        },
        {
            "name": "storeInDocument",
            "baseName": "storeInDocument",
            "type": "boolean"
        },
        {
            "name": "versionString",
            "baseName": "versionString",
            "type": "string"
        },
        {
            "name": "sourceName",
            "baseName": "sourceName",
            "type": "string"
        },
        {
            "name": "destinationName",
            "baseName": "destinationName",
            "type": "string"
        },
        {
            "name": "flatten",
            "baseName": "flatten",
            "type": "boolean"
        },
        {
            "name": "includeExportIds",
            "baseName": "includeExportIds",
            "type": "boolean"
        },
        {
            "name": "textAsGeometry",
            "baseName": "textAsGeometry",
            "type": "boolean"
        },
        {
            "name": "showOverriddenDimensions",
            "baseName": "showOverriddenDimensions",
            "type": "boolean"
        },
        {
            "name": "currentSheetOnly",
            "baseName": "currentSheetOnly",
            "type": "boolean"
        },
        {
            "name": "imageWidth",
            "baseName": "imageWidth",
            "type": "number"
        },
        {
            "name": "imageHeight",
            "baseName": "imageHeight",
            "type": "number"
        },
        {
            "name": "colorMethod",
            "baseName": "colorMethod",
            "type": "string"
        },
        {
            "name": "splinesAsPolylines",
            "baseName": "splinesAsPolylines",
            "type": "boolean"
        },
        {
            "name": "selectablePdfText",
            "baseName": "selectablePdfText",
            "type": "boolean"
        },
        {
            "name": "grouping",
            "baseName": "grouping",
            "type": "boolean"
        },
        {
            "name": "importInBackground",
            "baseName": "importInBackground",
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
        }
    ];
    return BTTranslateInternalParams;
}());
exports.BTTranslateInternalParams = BTTranslateInternalParams;
