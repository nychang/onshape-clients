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
/**
* Array of information for each body.
*/
var BTExportTessellatedFacesBody = /** @class */ (function () {
    function BTExportTessellatedFacesBody() {
    }
    BTExportTessellatedFacesBody.getAttributeTypeMap = function () {
        return BTExportTessellatedFacesBody.attributeTypeMap;
    };
    BTExportTessellatedFacesBody.discriminator = undefined;
    BTExportTessellatedFacesBody.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "appearance",
            "baseName": "appearance",
            "type": "BTGraphicsAppearance"
        },
        {
            "name": "bodyType",
            "baseName": "bodyType",
            "type": "BTExportTessellatedFacesBody.BodyTypeEnum"
        },
        {
            "name": "faces",
            "baseName": "faces",
            "type": "Array<BTExportTessellatedFacesFace>"
        },
        {
            "name": "facetPoints",
            "baseName": "facetPoints",
            "type": "Array<BTVector3d>"
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
    return BTExportTessellatedFacesBody;
}());
exports.BTExportTessellatedFacesBody = BTExportTessellatedFacesBody;
(function (BTExportTessellatedFacesBody) {
    var BodyTypeEnum;
    (function (BodyTypeEnum) {
        BodyTypeEnum[BodyTypeEnum["SOLID"] = 'SOLID'] = "SOLID";
        BodyTypeEnum[BodyTypeEnum["SURFACE"] = 'SURFACE'] = "SURFACE";
        BodyTypeEnum[BodyTypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(BodyTypeEnum = BTExportTessellatedFacesBody.BodyTypeEnum || (BTExportTessellatedFacesBody.BodyTypeEnum = {}));
})(BTExportTessellatedFacesBody = exports.BTExportTessellatedFacesBody || (exports.BTExportTessellatedFacesBody = {}));
exports.BTExportTessellatedFacesBody = BTExportTessellatedFacesBody;
