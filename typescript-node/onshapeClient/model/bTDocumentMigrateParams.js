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
var BTDocumentMigrateParams = /** @class */ (function () {
    function BTDocumentMigrateParams() {
    }
    BTDocumentMigrateParams.getAttributeTypeMap = function () {
        return BTDocumentMigrateParams.attributeTypeMap;
    };
    BTDocumentMigrateParams.discriminator = undefined;
    BTDocumentMigrateParams.attributeTypeMap = [
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "clusterId",
            "baseName": "clusterId",
            "type": "string"
        }
    ];
    return BTDocumentMigrateParams;
}());
exports.BTDocumentMigrateParams = BTDocumentMigrateParams;
