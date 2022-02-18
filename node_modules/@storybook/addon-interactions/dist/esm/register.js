import { addons, types } from '@storybook/addons';
import { ADDON_ID, TOOL_ID, PANEL_ID } from './constants';
import { Tool } from './Tool';
import { Panel } from './Panel';
addons.register(ADDON_ID, function () {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Restart',
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return viewMode === 'story';
    },
    render: Tool
  });
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Interactions',
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === 'story';
    },
    render: Panel
  });
});