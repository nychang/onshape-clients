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


class BTCopyDocumentParams(object):
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
        'owner_id': 'str',
        'project_id': 'str',
        'parent_id': 'str',
        'is_public': 'bool',
        'beta_capability_ids': 'list[str]',
        'owner_type_index': 'int',
        'new_name': 'str'
    }

    attribute_map = {
        'owner_id': 'ownerId',
        'project_id': 'projectId',
        'parent_id': 'parentId',
        'is_public': 'isPublic',
        'beta_capability_ids': 'betaCapabilityIds',
        'owner_type_index': 'ownerTypeIndex',
        'new_name': 'newName'
    }

    def __init__(self, owner_id=None, project_id=None, parent_id=None, is_public=None, beta_capability_ids=None, owner_type_index=None, new_name=None):  # noqa: E501
        """BTCopyDocumentParams - a model defined in OpenAPI"""  # noqa: E501

        self._owner_id = None
        self._project_id = None
        self._parent_id = None
        self._is_public = None
        self._beta_capability_ids = None
        self._owner_type_index = None
        self._new_name = None
        self.discriminator = None

        if owner_id is not None:
            self.owner_id = owner_id
        if project_id is not None:
            self.project_id = project_id
        if parent_id is not None:
            self.parent_id = parent_id
        if is_public is not None:
            self.is_public = is_public
        if beta_capability_ids is not None:
            self.beta_capability_ids = beta_capability_ids
        if owner_type_index is not None:
            self.owner_type_index = owner_type_index
        if new_name is not None:
            self.new_name = new_name

    @property
    def owner_id(self):
        """Gets the owner_id of this BTCopyDocumentParams.  # noqa: E501


        :return: The owner_id of this BTCopyDocumentParams.  # noqa: E501
        :rtype: str
        """
        return self._owner_id

    @owner_id.setter
    def owner_id(self, owner_id):
        """Sets the owner_id of this BTCopyDocumentParams.


        :param owner_id: The owner_id of this BTCopyDocumentParams.  # noqa: E501
        :type: str
        """

        self._owner_id = owner_id

    @property
    def project_id(self):
        """Gets the project_id of this BTCopyDocumentParams.  # noqa: E501


        :return: The project_id of this BTCopyDocumentParams.  # noqa: E501
        :rtype: str
        """
        return self._project_id

    @project_id.setter
    def project_id(self, project_id):
        """Sets the project_id of this BTCopyDocumentParams.


        :param project_id: The project_id of this BTCopyDocumentParams.  # noqa: E501
        :type: str
        """

        self._project_id = project_id

    @property
    def parent_id(self):
        """Gets the parent_id of this BTCopyDocumentParams.  # noqa: E501


        :return: The parent_id of this BTCopyDocumentParams.  # noqa: E501
        :rtype: str
        """
        return self._parent_id

    @parent_id.setter
    def parent_id(self, parent_id):
        """Sets the parent_id of this BTCopyDocumentParams.


        :param parent_id: The parent_id of this BTCopyDocumentParams.  # noqa: E501
        :type: str
        """

        self._parent_id = parent_id

    @property
    def is_public(self):
        """Gets the is_public of this BTCopyDocumentParams.  # noqa: E501


        :return: The is_public of this BTCopyDocumentParams.  # noqa: E501
        :rtype: bool
        """
        return self._is_public

    @is_public.setter
    def is_public(self, is_public):
        """Sets the is_public of this BTCopyDocumentParams.


        :param is_public: The is_public of this BTCopyDocumentParams.  # noqa: E501
        :type: bool
        """

        self._is_public = is_public

    @property
    def beta_capability_ids(self):
        """Gets the beta_capability_ids of this BTCopyDocumentParams.  # noqa: E501


        :return: The beta_capability_ids of this BTCopyDocumentParams.  # noqa: E501
        :rtype: list[str]
        """
        return self._beta_capability_ids

    @beta_capability_ids.setter
    def beta_capability_ids(self, beta_capability_ids):
        """Sets the beta_capability_ids of this BTCopyDocumentParams.


        :param beta_capability_ids: The beta_capability_ids of this BTCopyDocumentParams.  # noqa: E501
        :type: list[str]
        """

        self._beta_capability_ids = beta_capability_ids

    @property
    def owner_type_index(self):
        """Gets the owner_type_index of this BTCopyDocumentParams.  # noqa: E501


        :return: The owner_type_index of this BTCopyDocumentParams.  # noqa: E501
        :rtype: int
        """
        return self._owner_type_index

    @owner_type_index.setter
    def owner_type_index(self, owner_type_index):
        """Sets the owner_type_index of this BTCopyDocumentParams.


        :param owner_type_index: The owner_type_index of this BTCopyDocumentParams.  # noqa: E501
        :type: int
        """

        self._owner_type_index = owner_type_index

    @property
    def new_name(self):
        """Gets the new_name of this BTCopyDocumentParams.  # noqa: E501


        :return: The new_name of this BTCopyDocumentParams.  # noqa: E501
        :rtype: str
        """
        return self._new_name

    @new_name.setter
    def new_name(self, new_name):
        """Sets the new_name of this BTCopyDocumentParams.


        :param new_name: The new_name of this BTCopyDocumentParams.  # noqa: E501
        :type: str
        """

        self._new_name = new_name

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
        if not isinstance(other, BTCopyDocumentParams):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
