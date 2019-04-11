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
var BTDocumentWithVersionId = /** @class */ (function () {
    function BTDocumentWithVersionId() {
    }
    BTDocumentWithVersionId.getAttributeTypeMap = function () {
        return BTDocumentWithVersionId.attributeTypeMap;
    };
    BTDocumentWithVersionId.discriminator = undefined;
    BTDocumentWithVersionId.attributeTypeMap = [
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "documentVersionId",
            "baseName": "documentVersionId",
            "type": "string"
        }
    ];
    return BTDocumentWithVersionId;
}());
exports.BTDocumentWithVersionId = BTDocumentWithVersionId;
