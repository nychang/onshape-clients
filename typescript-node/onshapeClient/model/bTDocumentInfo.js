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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var bTDocumentSummaryInfo_1 = require("./bTDocumentSummaryInfo");
var BTDocumentInfo = /** @class */ (function (_super) {
    __extends(BTDocumentInfo, _super);
    function BTDocumentInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BTDocumentInfo.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(BTDocumentInfo.attributeTypeMap);
    };
    BTDocumentInfo.discriminator = undefined;
    BTDocumentInfo.attributeTypeMap = [];
    return BTDocumentInfo;
}(bTDocumentSummaryInfo_1.BTDocumentSummaryInfo));
exports.BTDocumentInfo = BTDocumentInfo;
