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
var BTExportTessellatedEdgesBody = /** @class */ (function () {
    function BTExportTessellatedEdgesBody() {
    }
    BTExportTessellatedEdgesBody.getAttributeTypeMap = function () {
        return BTExportTessellatedEdgesBody.attributeTypeMap;
    };
    BTExportTessellatedEdgesBody.discriminator = undefined;
    BTExportTessellatedEdgesBody.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "edges",
            "baseName": "edges",
            "type": "Array<BTExportTessellatedEdgesEdge>"
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
        }
    ];
    return BTExportTessellatedEdgesBody;
}());
exports.BTExportTessellatedEdgesBody = BTExportTessellatedEdgesBody;
