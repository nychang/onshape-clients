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


class BTWebhookOptions(object):
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
        'collapse_events': 'bool'
    }

    attribute_map = {
        'collapse_events': 'collapseEvents'
    }

    def __init__(self, collapse_events=None):  # noqa: E501
        """BTWebhookOptions - a model defined in OpenAPI"""  # noqa: E501

        self._collapse_events = None
        self.discriminator = None

        if collapse_events is not None:
            self.collapse_events = collapse_events

    @property
    def collapse_events(self):
        """Gets the collapse_events of this BTWebhookOptions.  # noqa: E501


        :return: The collapse_events of this BTWebhookOptions.  # noqa: E501
        :rtype: bool
        """
        return self._collapse_events

    @collapse_events.setter
    def collapse_events(self, collapse_events):
        """Sets the collapse_events of this BTWebhookOptions.


        :param collapse_events: The collapse_events of this BTWebhookOptions.  # noqa: E501
        :type: bool
        """

        self._collapse_events = collapse_events

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
        if not isinstance(other, BTWebhookOptions):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
