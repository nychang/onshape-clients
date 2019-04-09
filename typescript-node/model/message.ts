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


export class Message {
    'id'?: string;
    'defaultTitle'?: string;
    'defaultTemplate'?: string;
    'messageLevel'?: Message.MessageLevelEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "defaultTitle",
            "baseName": "defaultTitle",
            "type": "string"
        },
        {
            "name": "defaultTemplate",
            "baseName": "defaultTemplate",
            "type": "string"
        },
        {
            "name": "messageLevel",
            "baseName": "messageLevel",
            "type": "Message.MessageLevelEnum"
        }    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }
}

export namespace Message {
    export enum MessageLevelEnum {
        INFO = <any> 'INFO',
        WARNING = <any> 'WARNING',
        ERROR = <any> 'ERROR',
        MARKETING = <any> 'MARKETING',
        PRODUCT = <any> 'PRODUCT',
        IMPORTANT = <any> 'IMPORTANT',
        ACTION = <any> 'ACTION'
    }
}
