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
var BTExportModelCoedge = /** @class */ (function () {
    function BTExportModelCoedge() {
    }
    BTExportModelCoedge.getAttributeTypeMap = function () {
        return BTExportModelCoedge.attributeTypeMap;
    };
    BTExportModelCoedge.discriminator = undefined;
    BTExportModelCoedge.attributeTypeMap = [
        {
            "name": "orientation",
            "baseName": "orientation",
            "type": "boolean"
        },
        {
            "name": "edgeId",
            "baseName": "edgeId",
            "type": "string"
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
    return BTExportModelCoedge;
}());
exports.BTExportModelCoedge = BTExportModelCoedge;
