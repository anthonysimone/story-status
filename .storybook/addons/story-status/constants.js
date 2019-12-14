export const ADDON_ID = 'storystatus';
export const STATUS_PARAM_KEY = 'status';
export const DESC_PARAM_KEY = 'statusDescription';
export const PANEL_ID = `${ADDON_ID}/panel`;
export const TOOL_ID = `${ADDON_ID}/tool`;

export const statusToClass = {
  deprecated: 'neutral',
  development: 'critical',
  review: 'warning',
  published: 'positive'
}

export const statusToDescription = {
  deprecated: 'This component has been deprecated. Do not use this in new places as it is no longer supported and will be removed from the product soon.',
  development: 'This component is in active development. This should not be used in the product as it is an active working or experimental zone.',
  review: 'This component is in review. The api could still change as it goes through engineering and design review. This should not be used in the product yet, but will likely be available soon!',
  published: 'This component is published! This is the one you can use!'
}
