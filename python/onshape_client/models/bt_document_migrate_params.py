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


class BTDocumentMigrateParams(object):
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
        'document_id': 'str',
        'cluster_id': 'str'
    }

    attribute_map = {
        'document_id': 'documentId',
        'cluster_id': 'clusterId'
    }

    def __init__(self, document_id=None, cluster_id=None):  # noqa: E501
        """BTDocumentMigrateParams - a model defined in OpenAPI"""  # noqa: E501

        self._document_id = None
        self._cluster_id = None
        self.discriminator = None

        if document_id is not None:
            self.document_id = document_id
        if cluster_id is not None:
            self.cluster_id = cluster_id

    @property
    def document_id(self):
        """Gets the document_id of this BTDocumentMigrateParams.  # noqa: E501


        :return: The document_id of this BTDocumentMigrateParams.  # noqa: E501
        :rtype: str
        """
        return self._document_id

    @document_id.setter
    def document_id(self, document_id):
        """Sets the document_id of this BTDocumentMigrateParams.


        :param document_id: The document_id of this BTDocumentMigrateParams.  # noqa: E501
        :type: str
        """

        self._document_id = document_id

    @property
    def cluster_id(self):
        """Gets the cluster_id of this BTDocumentMigrateParams.  # noqa: E501


        :return: The cluster_id of this BTDocumentMigrateParams.  # noqa: E501
        :rtype: str
        """
        return self._cluster_id

    @cluster_id.setter
    def cluster_id(self, cluster_id):
        """Sets the cluster_id of this BTDocumentMigrateParams.


        :param cluster_id: The cluster_id of this BTDocumentMigrateParams.  # noqa: E501
        :type: str
        """

        self._cluster_id = cluster_id

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
        if not isinstance(other, BTDocumentMigrateParams):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
