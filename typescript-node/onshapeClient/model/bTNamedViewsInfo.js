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
var BTNamedViewsInfo = /** @class */ (function () {
    function BTNamedViewsInfo() {
    }
    BTNamedViewsInfo.getAttributeTypeMap = function () {
        return BTNamedViewsInfo.attributeTypeMap;
    };
    BTNamedViewsInfo.discriminator = undefined;
    BTNamedViewsInfo.attributeTypeMap = [
        {
            "name": "namedViews",
            "baseName": "namedViews",
            "type": "{ [key: string]: BTNamedViewInfo; }"
        }
    ];
    return BTNamedViewsInfo;
}());
exports.BTNamedViewsInfo = BTNamedViewsInfo;
