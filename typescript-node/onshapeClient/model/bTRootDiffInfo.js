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
var BTRootDiffInfo = /** @class */ (function () {
    function BTRootDiffInfo() {
    }
    BTRootDiffInfo.getAttributeTypeMap = function () {
        return BTRootDiffInfo.attributeTypeMap;
    };
    BTRootDiffInfo.discriminator = undefined;
    BTRootDiffInfo.attributeTypeMap = [
        {
            "name": "targetVersionId",
            "baseName": "targetVersionId",
            "type": "string"
        },
        {
            "name": "targetWorkspaceId",
            "baseName": "targetWorkspaceId",
            "type": "string"
        },
        {
            "name": "sourceConfiguration",
            "baseName": "sourceConfiguration",
            "type": "string"
        },
        {
            "name": "targetConfiguration",
            "baseName": "targetConfiguration",
            "type": "string"
        },
        {
            "name": "sourceMicroversionId",
            "baseName": "sourceMicroversionId",
            "type": "string"
        },
        {
            "name": "sourceVersionId",
            "baseName": "sourceVersionId",
            "type": "string"
        },
        {
            "name": "sourceWorkspaceId",
            "baseName": "sourceWorkspaceId",
            "type": "string"
        },
        {
            "name": "targetMicroversionId",
            "baseName": "targetMicroversionId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BTRootDiffInfo.TypeEnum"
        },
        {
            "name": "changes",
            "baseName": "changes",
            "type": "{ [key: string]: BTDiffInfo; }"
        },
        {
            "name": "sourceId",
            "baseName": "sourceId",
            "type": "string"
        },
        {
            "name": "collectionChanges",
            "baseName": "collectionChanges",
            "type": "{ [key: string]: Array<BTDiffInfo>; }"
        },
        {
            "name": "targetId",
            "baseName": "targetId",
            "type": "string"
        },
        {
            "name": "sourceValue",
            "baseName": "sourceValue",
            "type": "string"
        },
        {
            "name": "targetValue",
            "baseName": "targetValue",
            "type": "string"
        }
    ];
    return BTRootDiffInfo;
}());
exports.BTRootDiffInfo = BTRootDiffInfo;
(function (BTRootDiffInfo) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["NONE"] = 'NONE'] = "NONE";
        TypeEnum[TypeEnum["MOVED"] = 'MOVED'] = "MOVED";
        TypeEnum[TypeEnum["MODIFIED"] = 'MODIFIED'] = "MODIFIED";
        TypeEnum[TypeEnum["MOVEDANDMODIFIED"] = 'MOVED_AND_MODIFIED'] = "MOVEDANDMODIFIED";
        TypeEnum[TypeEnum["ADDED"] = 'ADDED'] = "ADDED";
        TypeEnum[TypeEnum["DELETED"] = 'DELETED'] = "DELETED";
        TypeEnum[TypeEnum["UNKNOWN"] = 'UNKNOWN'] = "UNKNOWN";
    })(TypeEnum = BTRootDiffInfo.TypeEnum || (BTRootDiffInfo.TypeEnum = {}));
})(BTRootDiffInfo = exports.BTRootDiffInfo || (exports.BTRootDiffInfo = {}));
exports.BTRootDiffInfo = BTRootDiffInfo;