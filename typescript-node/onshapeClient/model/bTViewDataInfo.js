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
var BTViewDataInfo = /** @class */ (function () {
    function BTViewDataInfo() {
    }
    BTViewDataInfo.getAttributeTypeMap = function () {
        return BTViewDataInfo.attributeTypeMap;
    };
    BTViewDataInfo.discriminator = undefined;
    BTViewDataInfo.attributeTypeMap = [
        {
            "name": "viewMatrix",
            "baseName": "viewMatrix",
            "type": "Array<number>"
        },
        {
            "name": "isPerspective",
            "baseName": "isPerspective",
            "type": "boolean"
        },
        {
            "name": "angle",
            "baseName": "angle",
            "type": "number"
        },
        {
            "name": "cameraViewport",
            "baseName": "cameraViewport",
            "type": "Array<number>"
        }
    ];
    return BTViewDataInfo;
}());
exports.BTViewDataInfo = BTViewDataInfo;
