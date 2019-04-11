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
var BTWorkflowPropertyInfo = /** @class */ (function () {
    function BTWorkflowPropertyInfo() {
    }
    BTWorkflowPropertyInfo.getAttributeTypeMap = function () {
        return BTWorkflowPropertyInfo.attributeTypeMap;
    };
    BTWorkflowPropertyInfo.discriminator = undefined;
    BTWorkflowPropertyInfo.attributeTypeMap = [
        {
            "name": "isNotifierProperty",
            "baseName": "isNotifierProperty",
            "type": "boolean"
        },
        {
            "name": "isApproverProperty",
            "baseName": "isApproverProperty",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "defaultValue",
            "baseName": "defaultValue",
            "type": "any"
        },
        {
            "name": "initialValue",
            "baseName": "initialValue",
            "type": "any"
        },
        {
            "name": "dirty",
            "baseName": "dirty",
            "type": "boolean"
        },
        {
            "name": "editable",
            "baseName": "editable",
            "type": "boolean"
        },
        {
            "name": "propertyId",
            "baseName": "propertyId",
            "type": "string"
        },
        {
            "name": "valueType",
            "baseName": "valueType",
            "type": "string"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "schemaId",
            "baseName": "schemaId",
            "type": "string"
        },
        {
            "name": "enumValues",
            "baseName": "enumValues",
            "type": "Array<BTMetadataEnumValueInfo>"
        },
        {
            "name": "editableInUi",
            "baseName": "editableInUi",
            "type": "boolean"
        },
        {
            "name": "validator",
            "baseName": "validator",
            "type": "BTMetadataPropertyValidatorInfo"
        },
        {
            "name": "propertySource",
            "baseName": "propertySource",
            "type": "number"
        },
        {
            "name": "uiHints",
            "baseName": "uiHints",
            "type": "BTMetadataPropertyUiHintsInfo"
        }
    ];
    return BTWorkflowPropertyInfo;
}());
exports.BTWorkflowPropertyInfo = BTWorkflowPropertyInfo;
