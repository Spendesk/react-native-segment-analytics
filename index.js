import {
  NativeModules,
} from 'react-native';

const {SegmentAnalytics} = NativeModules;

export default {
  setup: function (configKey: string) {
    SegmentAnalytics.setup(configKey);
  },

  identify: function (userId: string, traits: Object, options: Object) {
    SegmentAnalytics.identify(userId, traits, options);
  },

  track: function (trackText: string, properties: Object, options: Object) {
    SegmentAnalytics.track(trackText, properties, options);
  },

  screen: function (screenName: string, properties: Object, options: Object) {
    SegmentAnalytics.screen(screenName, properties, options);
  },

  reset: function() {
    SegmentAnalytics.reset();
  }
};
