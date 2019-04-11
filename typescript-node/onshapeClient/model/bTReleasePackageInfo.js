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
var BTReleasePackageInfo = /** @class */ (function () {
    function BTReleasePackageInfo() {
    }
    BTReleasePackageInfo.getAttributeTypeMap = function () {
        return BTReleasePackageInfo.attributeTypeMap;
    };
    BTReleasePackageInfo.discriminator = undefined;
    BTReleasePackageInfo.attributeTypeMap = [
        {
            "name": "detailed",
            "baseName": "detailed",
            "type": "boolean"
        },
        {
            "name": "columnNames",
            "baseName": "columnNames",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "Array<BTCommentInfo>"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<BTReleasePackageItemInfo>"
        },
        {
            "name": "packageThumbnail",
            "baseName": "packageThumbnail",
            "type": "string"
        },
        {
            "name": "workspaceId",
            "baseName": "workspaceId",
            "type": "string"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string"
        },
        {
            "name": "linkedVersionIds",
            "baseName": "linkedVersionIds",
            "type": "Array<string>"
        },
        {
            "name": "revisionRuleId",
            "baseName": "revisionRuleId",
            "type": "string"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "Array<BTWorkflowPropertyInfo>"
        },
        {
            "name": "descriptionAsProperty",
            "baseName": "descriptionAsProperty",
            "type": "string"
        },
        {
            "name": "nameAsProperty",
            "baseName": "nameAsProperty",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "workflow",
            "baseName": "workflow",
            "type": "BTWorkflowSnapshotInfo"
        },
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "isObsoletion",
            "baseName": "isObsoletion",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "href",
            "baseName": "href",
            "type": "string"
        },
        {
            "name": "viewRef",
            "baseName": "viewRef",
            "type": "string"
        }
    ];
    return BTReleasePackageInfo;
}());
exports.BTReleasePackageInfo = BTReleasePackageInfo;
