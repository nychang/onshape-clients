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

import { BTInAppMessageContentItem } from './bTInAppMessageContentItem';

export class BTInAppMessageContent {
    'title'?: string;
    'showItems'?: boolean;
    'contentItems'?: Array<BTInAppMessageContentItem>;
    'maxNumSurveyResponses'?: number;
    'state'?: BTInAppMessageContent.StateEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "showItems",
            "baseName": "showItems",
            "type": "boolean"
        },
        {
            "name": "contentItems",
            "baseName": "contentItems",
            "type": "Array<BTInAppMessageContentItem>"
        },
        {
            "name": "maxNumSurveyResponses",
            "baseName": "maxNumSurveyResponses",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "BTInAppMessageContent.StateEnum"
        }    ];

    static getAttributeTypeMap() {
        return BTInAppMessageContent.attributeTypeMap;
    }
}

export namespace BTInAppMessageContent {
    export enum StateEnum {
        DELETED = <any> 'DELETED',
        TRASH = <any> 'TRASH',
        ACTIVE = <any> 'ACTIVE'
    }
}