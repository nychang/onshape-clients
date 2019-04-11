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
var BTCustomPropertyDefinitionInfo = /** @class */ (function () {
    function BTCustomPropertyDefinitionInfo() {
    }
    BTCustomPropertyDefinitionInfo.getAttributeTypeMap = function () {
        return BTCustomPropertyDefinitionInfo.attributeTypeMap;
    };
    BTCustomPropertyDefinitionInfo.discriminator = undefined;
    BTCustomPropertyDefinitionInfo.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BTCustomPropertyDefinitionInfo.TypeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "enumDefinition",
            "baseName": "enumDefinition",
            "type": "Array<string>"
        },
        {
            "name": "template",
            "baseName": "template",
            "type": "string"
        }
    ];
    return BTCustomPropertyDefinitionInfo;
}());
exports.BTCustomPropertyDefinitionInfo = BTCustomPropertyDefinitionInfo;
(function (BTCustomPropertyDefinitionInfo) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["STRING"] = 'STRING'] = "STRING";
        TypeEnum[TypeEnum["NUMBER"] = 'NUMBER'] = "NUMBER";
        TypeEnum[TypeEnum["INTEGER"] = 'INTEGER'] = "INTEGER";
        TypeEnum[TypeEnum["BOOLEAN"] = 'BOOLEAN'] = "BOOLEAN";
        TypeEnum[TypeEnum["DATE"] = 'DATE'] = "DATE";
        TypeEnum[TypeEnum["ENUM"] = 'ENUM'] = "ENUM";
        TypeEnum[TypeEnum["BLOB"] = 'BLOB'] = "BLOB";
        TypeEnum[TypeEnum["OBJECT"] = 'OBJECT'] = "OBJECT";
        TypeEnum[TypeEnum["ARRAY"] = 'ARRAY'] = "ARRAY";
        TypeEnum[TypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(TypeEnum = BTCustomPropertyDefinitionInfo.TypeEnum || (BTCustomPropertyDefinitionInfo.TypeEnum = {}));
})(BTCustomPropertyDefinitionInfo = exports.BTCustomPropertyDefinitionInfo || (exports.BTCustomPropertyDefinitionInfo = {}));
exports.BTCustomPropertyDefinitionInfo = BTCustomPropertyDefinitionInfo;
