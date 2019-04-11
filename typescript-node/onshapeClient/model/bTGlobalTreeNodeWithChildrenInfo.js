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
var BTGlobalTreeNodeWithChildrenInfo = /** @class */ (function () {
    function BTGlobalTreeNodeWithChildrenInfo() {
    }
    BTGlobalTreeNodeWithChildrenInfo.getAttributeTypeMap = function () {
        return BTGlobalTreeNodeWithChildrenInfo.attributeTypeMap;
    };
    BTGlobalTreeNodeWithChildrenInfo.discriminator = undefined;
    BTGlobalTreeNodeWithChildrenInfo.attributeTypeMap = [
        {
            "name": "pathToRoot",
            "baseName": "pathToRoot",
            "type": "Array<PathSegment>"
        },
        {
            "name": "permissionSet",
            "baseName": "permissionSet",
            "type": "BTPermissionSet"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BTGlobalTreeNodeInfo>"
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string"
        }
    ];
    return BTGlobalTreeNodeWithChildrenInfo;
}());
exports.BTGlobalTreeNodeWithChildrenInfo = BTGlobalTreeNodeWithChildrenInfo;
