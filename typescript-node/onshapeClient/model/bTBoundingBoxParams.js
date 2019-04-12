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
var BTBoundingBoxParams = /** @class */ (function () {
    function BTBoundingBoxParams() {
    }
    BTBoundingBoxParams.getAttributeTypeMap = function () {
        return BTBoundingBoxParams.attributeTypeMap;
    };
    BTBoundingBoxParams.discriminator = undefined;
    BTBoundingBoxParams.attributeTypeMap = [
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        },
        {
            "name": "elementId",
            "baseName": "elementId",
            "type": "string"
        },
        {
            "name": "partQuery",
            "baseName": "partQuery",
            "type": "string"
        },
        {
            "name": "partId",
            "baseName": "partId",
            "type": "string"
        },
        {
            "name": "includeWireBodies",
            "baseName": "includeWireBodies",
            "type": "boolean"
        },
        {
            "name": "displayStateId",
            "baseName": "displayStateId",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "sketchId",
            "baseName": "sketchId",
            "type": "string"
        },
        {
            "name": "elementMicroversionId",
            "baseName": "elementMicroversionId",
            "type": "string"
        },
        {
            "name": "includeHidden",
            "baseName": "includeHidden",
            "type": "boolean"
        }
    ];
    return BTBoundingBoxParams;
}());
exports.BTBoundingBoxParams = BTBoundingBoxParams;