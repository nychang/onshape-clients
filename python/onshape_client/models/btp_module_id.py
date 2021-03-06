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


class BTPModuleId(object):
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
        'version_and_microversion': 'str',
        'external_import': 'bool',
        'imported_document_id': 'str',
        'legacy': 'bool',
        'dbimport_string': 'str',
        'imported_element_id': 'str',
        'element_import': 'bool',
        'potentially_valid': 'bool',
        'valid_legacy_version': 'bool',
        'path_version': 'str',
        'imported_version_id': 'str',
        'external_document_with_version_and_element_id': 'BTDocumentWithVersionAndElementId',
        'external_document_with_version': 'BTDocumentWithVersionId',
        'short_descriptor': 'str',
        'path': 'BTPLiteralString',
        'version': 'BTPLiteralString',
        'microversion': 'str',
        'first_child_field': 'int',
        'changeable_child_field_indices': 'list[int]',
        'space_before_path': 'BTPSpace',
        'space_after_path': 'BTPSpace',
        'space_before_version': 'BTPSpace',
        'space_after_version': 'BTPSpace',
        'start_source_location': 'int',
        'end_source_location': 'int',
        'atomic': 'bool',
        'documentation_type': 'str',
        'space_before': 'BTPSpace',
        'space_default': 'bool',
        'space_after': 'BTPSpace',
        'node_id': 'str',
        'child_map_indices': 'list[int]',
        'atomic_child_indices': 'list[int]',
        'node_id_raw': 'BTObjectId',
        'child_list_indices': 'list[int]',
        'type_id': 'int',
        'connection_source': 'BTConnection',
        'export_type_name': 'str',
        'unknown_class': 'bool'
    }

    attribute_map = {
        'version_and_microversion': 'versionAndMicroversion',
        'external_import': 'externalImport',
        'imported_document_id': 'importedDocumentId',
        'legacy': 'legacy',
        'dbimport_string': 'dbimportString',
        'imported_element_id': 'importedElementId',
        'element_import': 'elementImport',
        'potentially_valid': 'potentiallyValid',
        'valid_legacy_version': 'validLegacyVersion',
        'path_version': 'pathVersion',
        'imported_version_id': 'importedVersionId',
        'external_document_with_version_and_element_id': 'externalDocumentWithVersionAndElementId',
        'external_document_with_version': 'externalDocumentWithVersion',
        'short_descriptor': 'shortDescriptor',
        'path': 'path',
        'version': 'version',
        'microversion': 'microversion',
        'first_child_field': 'firstChildField',
        'changeable_child_field_indices': 'changeableChildFieldIndices',
        'space_before_path': 'spaceBeforePath',
        'space_after_path': 'spaceAfterPath',
        'space_before_version': 'spaceBeforeVersion',
        'space_after_version': 'spaceAfterVersion',
        'start_source_location': 'startSourceLocation',
        'end_source_location': 'endSourceLocation',
        'atomic': 'atomic',
        'documentation_type': 'documentationType',
        'space_before': 'spaceBefore',
        'space_default': 'spaceDefault',
        'space_after': 'spaceAfter',
        'node_id': 'nodeId',
        'child_map_indices': 'childMapIndices',
        'atomic_child_indices': 'atomicChildIndices',
        'node_id_raw': 'nodeIdRaw',
        'child_list_indices': 'childListIndices',
        'type_id': 'typeId',
        'connection_source': 'connectionSource',
        'export_type_name': 'exportTypeName',
        'unknown_class': 'unknownClass'
    }

    def __init__(self, version_and_microversion=None, external_import=None, imported_document_id=None, legacy=None, dbimport_string=None, imported_element_id=None, element_import=None, potentially_valid=None, valid_legacy_version=None, path_version=None, imported_version_id=None, external_document_with_version_and_element_id=None, external_document_with_version=None, short_descriptor=None, path=None, version=None, microversion=None, first_child_field=None, changeable_child_field_indices=None, space_before_path=None, space_after_path=None, space_before_version=None, space_after_version=None, start_source_location=None, end_source_location=None, atomic=None, documentation_type=None, space_before=None, space_default=None, space_after=None, node_id=None, child_map_indices=None, atomic_child_indices=None, node_id_raw=None, child_list_indices=None, type_id=None, connection_source=None, export_type_name=None, unknown_class=None):  # noqa: E501
        """BTPModuleId - a model defined in OpenAPI"""  # noqa: E501

        self._version_and_microversion = None
        self._external_import = None
        self._imported_document_id = None
        self._legacy = None
        self._dbimport_string = None
        self._imported_element_id = None
        self._element_import = None
        self._potentially_valid = None
        self._valid_legacy_version = None
        self._path_version = None
        self._imported_version_id = None
        self._external_document_with_version_and_element_id = None
        self._external_document_with_version = None
        self._short_descriptor = None
        self._path = None
        self._version = None
        self._microversion = None
        self._first_child_field = None
        self._changeable_child_field_indices = None
        self._space_before_path = None
        self._space_after_path = None
        self._space_before_version = None
        self._space_after_version = None
        self._start_source_location = None
        self._end_source_location = None
        self._atomic = None
        self._documentation_type = None
        self._space_before = None
        self._space_default = None
        self._space_after = None
        self._node_id = None
        self._child_map_indices = None
        self._atomic_child_indices = None
        self._node_id_raw = None
        self._child_list_indices = None
        self._type_id = None
        self._connection_source = None
        self._export_type_name = None
        self._unknown_class = None
        self.discriminator = None

        if version_and_microversion is not None:
            self.version_and_microversion = version_and_microversion
        if external_import is not None:
            self.external_import = external_import
        if imported_document_id is not None:
            self.imported_document_id = imported_document_id
        if legacy is not None:
            self.legacy = legacy
        if dbimport_string is not None:
            self.dbimport_string = dbimport_string
        if imported_element_id is not None:
            self.imported_element_id = imported_element_id
        if element_import is not None:
            self.element_import = element_import
        if potentially_valid is not None:
            self.potentially_valid = potentially_valid
        if valid_legacy_version is not None:
            self.valid_legacy_version = valid_legacy_version
        if path_version is not None:
            self.path_version = path_version
        if imported_version_id is not None:
            self.imported_version_id = imported_version_id
        if external_document_with_version_and_element_id is not None:
            self.external_document_with_version_and_element_id = external_document_with_version_and_element_id
        if external_document_with_version is not None:
            self.external_document_with_version = external_document_with_version
        if short_descriptor is not None:
            self.short_descriptor = short_descriptor
        if path is not None:
            self.path = path
        if version is not None:
            self.version = version
        if microversion is not None:
            self.microversion = microversion
        if first_child_field is not None:
            self.first_child_field = first_child_field
        if changeable_child_field_indices is not None:
            self.changeable_child_field_indices = changeable_child_field_indices
        if space_before_path is not None:
            self.space_before_path = space_before_path
        if space_after_path is not None:
            self.space_after_path = space_after_path
        if space_before_version is not None:
            self.space_before_version = space_before_version
        if space_after_version is not None:
            self.space_after_version = space_after_version
        if start_source_location is not None:
            self.start_source_location = start_source_location
        if end_source_location is not None:
            self.end_source_location = end_source_location
        if atomic is not None:
            self.atomic = atomic
        if documentation_type is not None:
            self.documentation_type = documentation_type
        if space_before is not None:
            self.space_before = space_before
        if space_default is not None:
            self.space_default = space_default
        if space_after is not None:
            self.space_after = space_after
        if node_id is not None:
            self.node_id = node_id
        if child_map_indices is not None:
            self.child_map_indices = child_map_indices
        if atomic_child_indices is not None:
            self.atomic_child_indices = atomic_child_indices
        if node_id_raw is not None:
            self.node_id_raw = node_id_raw
        if child_list_indices is not None:
            self.child_list_indices = child_list_indices
        if type_id is not None:
            self.type_id = type_id
        if connection_source is not None:
            self.connection_source = connection_source
        if export_type_name is not None:
            self.export_type_name = export_type_name
        if unknown_class is not None:
            self.unknown_class = unknown_class

    @property
    def version_and_microversion(self):
        """Gets the version_and_microversion of this BTPModuleId.  # noqa: E501


        :return: The version_and_microversion of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._version_and_microversion

    @version_and_microversion.setter
    def version_and_microversion(self, version_and_microversion):
        """Sets the version_and_microversion of this BTPModuleId.


        :param version_and_microversion: The version_and_microversion of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._version_and_microversion = version_and_microversion

    @property
    def external_import(self):
        """Gets the external_import of this BTPModuleId.  # noqa: E501


        :return: The external_import of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._external_import

    @external_import.setter
    def external_import(self, external_import):
        """Sets the external_import of this BTPModuleId.


        :param external_import: The external_import of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._external_import = external_import

    @property
    def imported_document_id(self):
        """Gets the imported_document_id of this BTPModuleId.  # noqa: E501


        :return: The imported_document_id of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._imported_document_id

    @imported_document_id.setter
    def imported_document_id(self, imported_document_id):
        """Sets the imported_document_id of this BTPModuleId.


        :param imported_document_id: The imported_document_id of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._imported_document_id = imported_document_id

    @property
    def legacy(self):
        """Gets the legacy of this BTPModuleId.  # noqa: E501


        :return: The legacy of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._legacy

    @legacy.setter
    def legacy(self, legacy):
        """Sets the legacy of this BTPModuleId.


        :param legacy: The legacy of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._legacy = legacy

    @property
    def dbimport_string(self):
        """Gets the dbimport_string of this BTPModuleId.  # noqa: E501


        :return: The dbimport_string of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._dbimport_string

    @dbimport_string.setter
    def dbimport_string(self, dbimport_string):
        """Sets the dbimport_string of this BTPModuleId.


        :param dbimport_string: The dbimport_string of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._dbimport_string = dbimport_string

    @property
    def imported_element_id(self):
        """Gets the imported_element_id of this BTPModuleId.  # noqa: E501


        :return: The imported_element_id of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._imported_element_id

    @imported_element_id.setter
    def imported_element_id(self, imported_element_id):
        """Sets the imported_element_id of this BTPModuleId.


        :param imported_element_id: The imported_element_id of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._imported_element_id = imported_element_id

    @property
    def element_import(self):
        """Gets the element_import of this BTPModuleId.  # noqa: E501


        :return: The element_import of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._element_import

    @element_import.setter
    def element_import(self, element_import):
        """Sets the element_import of this BTPModuleId.


        :param element_import: The element_import of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._element_import = element_import

    @property
    def potentially_valid(self):
        """Gets the potentially_valid of this BTPModuleId.  # noqa: E501


        :return: The potentially_valid of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._potentially_valid

    @potentially_valid.setter
    def potentially_valid(self, potentially_valid):
        """Sets the potentially_valid of this BTPModuleId.


        :param potentially_valid: The potentially_valid of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._potentially_valid = potentially_valid

    @property
    def valid_legacy_version(self):
        """Gets the valid_legacy_version of this BTPModuleId.  # noqa: E501


        :return: The valid_legacy_version of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._valid_legacy_version

    @valid_legacy_version.setter
    def valid_legacy_version(self, valid_legacy_version):
        """Sets the valid_legacy_version of this BTPModuleId.


        :param valid_legacy_version: The valid_legacy_version of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._valid_legacy_version = valid_legacy_version

    @property
    def path_version(self):
        """Gets the path_version of this BTPModuleId.  # noqa: E501


        :return: The path_version of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._path_version

    @path_version.setter
    def path_version(self, path_version):
        """Sets the path_version of this BTPModuleId.


        :param path_version: The path_version of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._path_version = path_version

    @property
    def imported_version_id(self):
        """Gets the imported_version_id of this BTPModuleId.  # noqa: E501


        :return: The imported_version_id of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._imported_version_id

    @imported_version_id.setter
    def imported_version_id(self, imported_version_id):
        """Sets the imported_version_id of this BTPModuleId.


        :param imported_version_id: The imported_version_id of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._imported_version_id = imported_version_id

    @property
    def external_document_with_version_and_element_id(self):
        """Gets the external_document_with_version_and_element_id of this BTPModuleId.  # noqa: E501


        :return: The external_document_with_version_and_element_id of this BTPModuleId.  # noqa: E501
        :rtype: BTDocumentWithVersionAndElementId
        """
        return self._external_document_with_version_and_element_id

    @external_document_with_version_and_element_id.setter
    def external_document_with_version_and_element_id(self, external_document_with_version_and_element_id):
        """Sets the external_document_with_version_and_element_id of this BTPModuleId.


        :param external_document_with_version_and_element_id: The external_document_with_version_and_element_id of this BTPModuleId.  # noqa: E501
        :type: BTDocumentWithVersionAndElementId
        """

        self._external_document_with_version_and_element_id = external_document_with_version_and_element_id

    @property
    def external_document_with_version(self):
        """Gets the external_document_with_version of this BTPModuleId.  # noqa: E501


        :return: The external_document_with_version of this BTPModuleId.  # noqa: E501
        :rtype: BTDocumentWithVersionId
        """
        return self._external_document_with_version

    @external_document_with_version.setter
    def external_document_with_version(self, external_document_with_version):
        """Sets the external_document_with_version of this BTPModuleId.


        :param external_document_with_version: The external_document_with_version of this BTPModuleId.  # noqa: E501
        :type: BTDocumentWithVersionId
        """

        self._external_document_with_version = external_document_with_version

    @property
    def short_descriptor(self):
        """Gets the short_descriptor of this BTPModuleId.  # noqa: E501


        :return: The short_descriptor of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._short_descriptor

    @short_descriptor.setter
    def short_descriptor(self, short_descriptor):
        """Sets the short_descriptor of this BTPModuleId.


        :param short_descriptor: The short_descriptor of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._short_descriptor = short_descriptor

    @property
    def path(self):
        """Gets the path of this BTPModuleId.  # noqa: E501


        :return: The path of this BTPModuleId.  # noqa: E501
        :rtype: BTPLiteralString
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this BTPModuleId.


        :param path: The path of this BTPModuleId.  # noqa: E501
        :type: BTPLiteralString
        """

        self._path = path

    @property
    def version(self):
        """Gets the version of this BTPModuleId.  # noqa: E501


        :return: The version of this BTPModuleId.  # noqa: E501
        :rtype: BTPLiteralString
        """
        return self._version

    @version.setter
    def version(self, version):
        """Sets the version of this BTPModuleId.


        :param version: The version of this BTPModuleId.  # noqa: E501
        :type: BTPLiteralString
        """

        self._version = version

    @property
    def microversion(self):
        """Gets the microversion of this BTPModuleId.  # noqa: E501


        :return: The microversion of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._microversion

    @microversion.setter
    def microversion(self, microversion):
        """Sets the microversion of this BTPModuleId.


        :param microversion: The microversion of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._microversion = microversion

    @property
    def first_child_field(self):
        """Gets the first_child_field of this BTPModuleId.  # noqa: E501


        :return: The first_child_field of this BTPModuleId.  # noqa: E501
        :rtype: int
        """
        return self._first_child_field

    @first_child_field.setter
    def first_child_field(self, first_child_field):
        """Sets the first_child_field of this BTPModuleId.


        :param first_child_field: The first_child_field of this BTPModuleId.  # noqa: E501
        :type: int
        """

        self._first_child_field = first_child_field

    @property
    def changeable_child_field_indices(self):
        """Gets the changeable_child_field_indices of this BTPModuleId.  # noqa: E501


        :return: The changeable_child_field_indices of this BTPModuleId.  # noqa: E501
        :rtype: list[int]
        """
        return self._changeable_child_field_indices

    @changeable_child_field_indices.setter
    def changeable_child_field_indices(self, changeable_child_field_indices):
        """Sets the changeable_child_field_indices of this BTPModuleId.


        :param changeable_child_field_indices: The changeable_child_field_indices of this BTPModuleId.  # noqa: E501
        :type: list[int]
        """

        self._changeable_child_field_indices = changeable_child_field_indices

    @property
    def space_before_path(self):
        """Gets the space_before_path of this BTPModuleId.  # noqa: E501


        :return: The space_before_path of this BTPModuleId.  # noqa: E501
        :rtype: BTPSpace
        """
        return self._space_before_path

    @space_before_path.setter
    def space_before_path(self, space_before_path):
        """Sets the space_before_path of this BTPModuleId.


        :param space_before_path: The space_before_path of this BTPModuleId.  # noqa: E501
        :type: BTPSpace
        """

        self._space_before_path = space_before_path

    @property
    def space_after_path(self):
        """Gets the space_after_path of this BTPModuleId.  # noqa: E501


        :return: The space_after_path of this BTPModuleId.  # noqa: E501
        :rtype: BTPSpace
        """
        return self._space_after_path

    @space_after_path.setter
    def space_after_path(self, space_after_path):
        """Sets the space_after_path of this BTPModuleId.


        :param space_after_path: The space_after_path of this BTPModuleId.  # noqa: E501
        :type: BTPSpace
        """

        self._space_after_path = space_after_path

    @property
    def space_before_version(self):
        """Gets the space_before_version of this BTPModuleId.  # noqa: E501


        :return: The space_before_version of this BTPModuleId.  # noqa: E501
        :rtype: BTPSpace
        """
        return self._space_before_version

    @space_before_version.setter
    def space_before_version(self, space_before_version):
        """Sets the space_before_version of this BTPModuleId.


        :param space_before_version: The space_before_version of this BTPModuleId.  # noqa: E501
        :type: BTPSpace
        """

        self._space_before_version = space_before_version

    @property
    def space_after_version(self):
        """Gets the space_after_version of this BTPModuleId.  # noqa: E501


        :return: The space_after_version of this BTPModuleId.  # noqa: E501
        :rtype: BTPSpace
        """
        return self._space_after_version

    @space_after_version.setter
    def space_after_version(self, space_after_version):
        """Sets the space_after_version of this BTPModuleId.


        :param space_after_version: The space_after_version of this BTPModuleId.  # noqa: E501
        :type: BTPSpace
        """

        self._space_after_version = space_after_version

    @property
    def start_source_location(self):
        """Gets the start_source_location of this BTPModuleId.  # noqa: E501


        :return: The start_source_location of this BTPModuleId.  # noqa: E501
        :rtype: int
        """
        return self._start_source_location

    @start_source_location.setter
    def start_source_location(self, start_source_location):
        """Sets the start_source_location of this BTPModuleId.


        :param start_source_location: The start_source_location of this BTPModuleId.  # noqa: E501
        :type: int
        """

        self._start_source_location = start_source_location

    @property
    def end_source_location(self):
        """Gets the end_source_location of this BTPModuleId.  # noqa: E501


        :return: The end_source_location of this BTPModuleId.  # noqa: E501
        :rtype: int
        """
        return self._end_source_location

    @end_source_location.setter
    def end_source_location(self, end_source_location):
        """Sets the end_source_location of this BTPModuleId.


        :param end_source_location: The end_source_location of this BTPModuleId.  # noqa: E501
        :type: int
        """

        self._end_source_location = end_source_location

    @property
    def atomic(self):
        """Gets the atomic of this BTPModuleId.  # noqa: E501


        :return: The atomic of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._atomic

    @atomic.setter
    def atomic(self, atomic):
        """Sets the atomic of this BTPModuleId.


        :param atomic: The atomic of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._atomic = atomic

    @property
    def documentation_type(self):
        """Gets the documentation_type of this BTPModuleId.  # noqa: E501


        :return: The documentation_type of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._documentation_type

    @documentation_type.setter
    def documentation_type(self, documentation_type):
        """Sets the documentation_type of this BTPModuleId.


        :param documentation_type: The documentation_type of this BTPModuleId.  # noqa: E501
        :type: str
        """
        allowed_values = ["FUNCTION", "PREDICATE", "CONSTANT", "ENUM", "USER_TYPE", "FEATURE_DEFINITION", "FILE_HEADER", "UNDOCUMENTABLE", "UNKNOWN"]  # noqa: E501
        if documentation_type not in allowed_values:
            raise ValueError(
                "Invalid value for `documentation_type` ({0}), must be one of {1}"  # noqa: E501
                .format(documentation_type, allowed_values)
            )

        self._documentation_type = documentation_type

    @property
    def space_before(self):
        """Gets the space_before of this BTPModuleId.  # noqa: E501


        :return: The space_before of this BTPModuleId.  # noqa: E501
        :rtype: BTPSpace
        """
        return self._space_before

    @space_before.setter
    def space_before(self, space_before):
        """Sets the space_before of this BTPModuleId.


        :param space_before: The space_before of this BTPModuleId.  # noqa: E501
        :type: BTPSpace
        """

        self._space_before = space_before

    @property
    def space_default(self):
        """Gets the space_default of this BTPModuleId.  # noqa: E501


        :return: The space_default of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._space_default

    @space_default.setter
    def space_default(self, space_default):
        """Sets the space_default of this BTPModuleId.


        :param space_default: The space_default of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._space_default = space_default

    @property
    def space_after(self):
        """Gets the space_after of this BTPModuleId.  # noqa: E501


        :return: The space_after of this BTPModuleId.  # noqa: E501
        :rtype: BTPSpace
        """
        return self._space_after

    @space_after.setter
    def space_after(self, space_after):
        """Sets the space_after of this BTPModuleId.


        :param space_after: The space_after of this BTPModuleId.  # noqa: E501
        :type: BTPSpace
        """

        self._space_after = space_after

    @property
    def node_id(self):
        """Gets the node_id of this BTPModuleId.  # noqa: E501


        :return: The node_id of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._node_id

    @node_id.setter
    def node_id(self, node_id):
        """Sets the node_id of this BTPModuleId.


        :param node_id: The node_id of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._node_id = node_id

    @property
    def child_map_indices(self):
        """Gets the child_map_indices of this BTPModuleId.  # noqa: E501


        :return: The child_map_indices of this BTPModuleId.  # noqa: E501
        :rtype: list[int]
        """
        return self._child_map_indices

    @child_map_indices.setter
    def child_map_indices(self, child_map_indices):
        """Sets the child_map_indices of this BTPModuleId.


        :param child_map_indices: The child_map_indices of this BTPModuleId.  # noqa: E501
        :type: list[int]
        """

        self._child_map_indices = child_map_indices

    @property
    def atomic_child_indices(self):
        """Gets the atomic_child_indices of this BTPModuleId.  # noqa: E501


        :return: The atomic_child_indices of this BTPModuleId.  # noqa: E501
        :rtype: list[int]
        """
        return self._atomic_child_indices

    @atomic_child_indices.setter
    def atomic_child_indices(self, atomic_child_indices):
        """Sets the atomic_child_indices of this BTPModuleId.


        :param atomic_child_indices: The atomic_child_indices of this BTPModuleId.  # noqa: E501
        :type: list[int]
        """

        self._atomic_child_indices = atomic_child_indices

    @property
    def node_id_raw(self):
        """Gets the node_id_raw of this BTPModuleId.  # noqa: E501


        :return: The node_id_raw of this BTPModuleId.  # noqa: E501
        :rtype: BTObjectId
        """
        return self._node_id_raw

    @node_id_raw.setter
    def node_id_raw(self, node_id_raw):
        """Sets the node_id_raw of this BTPModuleId.


        :param node_id_raw: The node_id_raw of this BTPModuleId.  # noqa: E501
        :type: BTObjectId
        """

        self._node_id_raw = node_id_raw

    @property
    def child_list_indices(self):
        """Gets the child_list_indices of this BTPModuleId.  # noqa: E501


        :return: The child_list_indices of this BTPModuleId.  # noqa: E501
        :rtype: list[int]
        """
        return self._child_list_indices

    @child_list_indices.setter
    def child_list_indices(self, child_list_indices):
        """Sets the child_list_indices of this BTPModuleId.


        :param child_list_indices: The child_list_indices of this BTPModuleId.  # noqa: E501
        :type: list[int]
        """

        self._child_list_indices = child_list_indices

    @property
    def type_id(self):
        """Gets the type_id of this BTPModuleId.  # noqa: E501


        :return: The type_id of this BTPModuleId.  # noqa: E501
        :rtype: int
        """
        return self._type_id

    @type_id.setter
    def type_id(self, type_id):
        """Sets the type_id of this BTPModuleId.


        :param type_id: The type_id of this BTPModuleId.  # noqa: E501
        :type: int
        """

        self._type_id = type_id

    @property
    def connection_source(self):
        """Gets the connection_source of this BTPModuleId.  # noqa: E501


        :return: The connection_source of this BTPModuleId.  # noqa: E501
        :rtype: BTConnection
        """
        return self._connection_source

    @connection_source.setter
    def connection_source(self, connection_source):
        """Sets the connection_source of this BTPModuleId.


        :param connection_source: The connection_source of this BTPModuleId.  # noqa: E501
        :type: BTConnection
        """

        self._connection_source = connection_source

    @property
    def export_type_name(self):
        """Gets the export_type_name of this BTPModuleId.  # noqa: E501


        :return: The export_type_name of this BTPModuleId.  # noqa: E501
        :rtype: str
        """
        return self._export_type_name

    @export_type_name.setter
    def export_type_name(self, export_type_name):
        """Sets the export_type_name of this BTPModuleId.


        :param export_type_name: The export_type_name of this BTPModuleId.  # noqa: E501
        :type: str
        """

        self._export_type_name = export_type_name

    @property
    def unknown_class(self):
        """Gets the unknown_class of this BTPModuleId.  # noqa: E501


        :return: The unknown_class of this BTPModuleId.  # noqa: E501
        :rtype: bool
        """
        return self._unknown_class

    @unknown_class.setter
    def unknown_class(self, unknown_class):
        """Sets the unknown_class of this BTPModuleId.


        :param unknown_class: The unknown_class of this BTPModuleId.  # noqa: E501
        :type: bool
        """

        self._unknown_class = unknown_class

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
        if not isinstance(other, BTPModuleId):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
