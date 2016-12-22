import {
  NativeModules,
} from 'react-native';

const {SegmentAnalytics} = NativeModules;

export default {
  setup: function (configKey: string) {
    SegmentAnalytics.setup(configKey);
  },

  identify: function (userId: string, traits: Object) {
    SegmentAnalytics.identify(userId, traits);
  },

  track: function (trackText: string, properties: Object) {
    SegmentAnalytics.track(trackText, properties);
  },

  screen: function (screenName: string, properties: Object) {
    SegmentAnalytics.screen(screenName, properties);
  },

  reset: function() {
    SegmentAnalytics.reset();
  }
};
