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

import { BTCommentAttachmentInfo } from './bTCommentAttachmentInfo';
import { BTUserSummaryInfo } from './bTUserSummaryInfo';
import { BTViewDataInfo } from './bTViewDataInfo';

export class BTCommentInfo {
    'message'?: string;
    'state'?: number;
    'elementOccurrences'?: Array<string>;
    'assemblyFeatures'?: Array<string>;
    'canResolveOrReopen'?: boolean;
    'canDelete'?: boolean;
    'user'?: BTUserSummaryInfo;
    'resolvedBy'?: BTUserSummaryInfo;
    'resolvedAt'?: Date;
    'createdAt'?: Date;
    'viewData'?: BTViewDataInfo;
    'elementQuery'?: string;
    'elementFeature'?: string;
    'assignee'?: BTUserSummaryInfo;
    'assignedAt'?: Date;
    'topLevel'?: boolean;
    'reopenedBy'?: BTUserSummaryInfo;
    'reopenedAt'?: Date;
    'workspaceId'?: string;
    'elementId'?: string;
    'documentId'?: string;
    'versionId'?: string;
    'attachment'?: BTCommentAttachmentInfo;
    'parentId'?: string;
    'thumbnail'?: BTCommentAttachmentInfo;
    'releasePackageId'?: string;
    'name'?: string;
    'id'?: string;
    'href'?: string;
    'viewRef'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "number"
        },
        {
            "name": "elementOccurrences",
            "baseName": "elementOccurrences",
            "type": "Array<string>"
        },
        {
            "name": "assemblyFeatures",
            "baseName": "assemblyFeatures",
            "type": "Array<string>"
        },
        {
            "name": "canResolveOrReopen",
            "baseName": "canResolveOrReopen",
            "type": "boolean"
        },
        {
            "name": "canDelete",
            "baseName": "canDelete",
            "type": "boolean"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "BTUserSummaryInfo"
        },
        {
            "name": "resolvedBy",
            "baseName": "resolvedBy",
            "type": "BTUserSummaryInfo"
        },
        {
            "name": "resolvedAt",
            "baseName": "resolvedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "viewData",
            "baseName": "viewData",
            "type": "BTViewDataInfo"
        },
        {
            "name": "elementQuery",
            "baseName": "elementQuery",
            "type": "string"
        },
        {
            "name": "elementFeature",
            "baseName": "elementFeature",
            "type": "string"
        },
        {
            "name": "assignee",
            "baseName": "assignee",
            "type": "BTUserSummaryInfo"
        },
        {
            "name": "assignedAt",
            "baseName": "assignedAt",
            "type": "Date"
        },
        {
            "name": "topLevel",
            "baseName": "topLevel",
            "type": "boolean"
        },
        {
            "name": "reopenedBy",
            "baseName": "reopenedBy",
            "type": "BTUserSummaryInfo"
        },
        {
            "name": "reopenedAt",
            "baseName": "reopenedAt",
            "type": "Date"
        },
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
            "name": "documentId",
            "baseName": "documentId",
            "type": "string"
        },
        {
            "name": "versionId",
            "baseName": "versionId",
            "type": "string"
        },
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "BTCommentAttachmentInfo"
        },
        {
            "name": "parentId",
            "baseName": "parentId",
            "type": "string"
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "BTCommentAttachmentInfo"
        },
        {
            "name": "releasePackageId",
            "baseName": "releasePackageId",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return BTCommentInfo.attributeTypeMap;
    }
}

