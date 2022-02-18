"use strict";

var _addons = require("@storybook/addons");

var _constants = require("./constants");

var _Tool = require("./Tool");

var _Panel = require("./Panel");

_addons.addons.register(_constants.ADDON_ID, function () {
  _addons.addons.add(_constants.TOOL_ID, {
    type: _addons.types.TOOL,
    title: 'Restart',
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: _Tool.Tool
  });

  _addons.addons.add(_constants.PANEL_ID, {
    type: _addons.types.PANEL,
    title: 'Interactions',
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === 'story';
    },
    render: _Panel.Panel
  });
});