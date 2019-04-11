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
var BTDocumentWithVersionAndElementId = /** @class */ (function () {
    function BTDocumentWithVersionAndElementId() {
    }
    BTDocumentWithVersionAndElementId.getAttributeTypeMap = function () {
        return BTDocumentWithVersionAndElementId.attributeTypeMap;
    };
    BTDocumentWithVersionAndElementId.discriminator = undefined;
    BTDocumentWithVersionAndElementId.attributeTypeMap = [
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "documentVersionId",
            "baseName": "documentVersionId",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "partNumber",
            "baseName": "partNumber",
            "type": "string"
        },
        {
            "name": "revision",
            "baseName": "revision",
            "type": "string"
        },
        {
            "name": "validRevisionReference",
            "baseName": "validRevisionReference",
            "type": "boolean"
        },
        {
            "name": "uniqueVersionId",
            "baseName": "uniqueVersionId",
            "type": "string"
        }
    ];
    return BTDocumentWithVersionAndElementId;
}());
exports.BTDocumentWithVersionAndElementId = BTDocumentWithVersionAndElementId;
