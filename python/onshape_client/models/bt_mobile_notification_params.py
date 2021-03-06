# coding: utf-8

"""
    Onshape REST API

    The Onshape REST API consumed by all clients.  # noqa: E501

    OpenAPI spec version: 1.96
    Contact: api-support@onshape.zendesk.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six


class BTMobileNotificationParams(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'items_to_acknowledge': 'list[Item]'
    }

    attribute_map = {
        'items_to_acknowledge': 'itemsToAcknowledge'
    }

    def __init__(self, items_to_acknowledge=None):  # noqa: E501
        """BTMobileNotificationParams - a model defined in OpenAPI"""  # noqa: E501

        self._items_to_acknowledge = None
        self.discriminator = None

        if items_to_acknowledge is not None:
            self.items_to_acknowledge = items_to_acknowledge

    @property
    def items_to_acknowledge(self):
        """Gets the items_to_acknowledge of this BTMobileNotificationParams.  # noqa: E501


        :return: The items_to_acknowledge of this BTMobileNotificationParams.  # noqa: E501
        :rtype: list[Item]
        """
        return self._items_to_acknowledge

    @items_to_acknowledge.setter
    def items_to_acknowledge(self, items_to_acknowledge):
        """Sets the items_to_acknowledge of this BTMobileNotificationParams.


        :param items_to_acknowledge: The items_to_acknowledge of this BTMobileNotificationParams.  # noqa: E501
        :type: list[Item]
        """

        self._items_to_acknowledge = items_to_acknowledge

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, BTMobileNotificationParams):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
