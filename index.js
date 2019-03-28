/**
 * Stub of AmplitudeSDK for React Native
 *
 * @providesModule AmplitudeSDK
 * @flow
 */
"use strict";

// Libraries
import { NativeModules, Platform } from "react-native";

// Native Modules
const { RNAmplitudeSDK } = NativeModules;
var amplitudeHasInitialized = false;

class Amplitude {
  /**
   * Creates a new Amplitude client
   */
  constructor(apiKey, trackSessionEvents, eventPrefix) {
    if (apiKey && typeof apiKey === "string") {
      if (RNAmplitudeSDK) {
        if (eventPrefix) {
          this.evPrefix = eventPrefix;
        }
        RNAmplitudeSDK.initialize(apiKey, trackSessionEvents === true);
        amplitudeHasInitialized = true;
      } else {
        throw new Error(
          "RNAmplitudeSDK: No native client found. Is RNAmplitudeSDK installed in your native code project?"
        );
      }
    } else {
      throw new Error(
        "RNAmplitudeSDK: A client must be constructed with an API key. i.e new Amplitude(key);"
      );
    }
  }

  // --------------------------------------------------
  // Identify
  // --------------------------------------------------
  setUserId(userId) {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.setUserId(userId ? userId.toString() : null);
    } else {
      throw new Error(
        "You called Amplitude.setUserId before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  setUserProperties(properties) {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.setUserProperties(properties);
    } else {
      throw new Error(
        "You called Amplitude.setUserProperties before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  setOptOut(optOut) {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.setOptOut(optOut);
    } else {
      throw new Error(
        "You called Amplitude.setOptOut before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  clearUserProperties() {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.clearUserProperties();
    } else {
      throw new Error(
        "You called Amplitude.clearUserProperties before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  getDeviceId() {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.getDeviceId();
    } else {
      throw new Error(
        "You called Amplitude.getDeviceId before initializing it. Run new Amplitude(key) first."
      );
    }
  }

  regenerateDeviceId() {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.regenerateDeviceId();
    } else {
      throw new Error(
        "You called Amplitude.regenerateDeviceId before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  setLogEventPrefix(prefix) {
    if (amplitudeHasInitialized) {
      this.evPrefix = prefix;
    } else {
      throw new Error(
        "You called Amplitude.setLogEventPrefix before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  // --------------------------------------------------
  // Track
  // --------------------------------------------------

  logEvent(name, properties) {
    if (amplitudeHasInitialized) {
      var eventName = this.evPrefix ? this.evPrefix + name : name;
      if (properties) {
        return RNAmplitudeSDK.logEventWithProps(eventName, properties);
      } else {
        return RNAmplitudeSDK.logEvent(eventName);
      }
    } else {
      throw new Error(
        "You called Amplitude.logEvent before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  logEventWithTimestamp(name, timestamp, properties = {}) {
    if (amplitudeHasInitialized) {
      var eventName = this.evPrefix ? this.evPrefix + name : name;
      return RNAmplitudeSDK.logEventWithTimestamp(
        eventName,
        timestamp,
        properties
      );
    } else {
      throw new Error(
        "You called Amplitude.logEvent before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  // --------------------------------------------------
  // Revenue
  // --------------------------------------------------
  logRevenue(productIdentifier, quantity, amount, receipt) {
    if (amplitudeHasInitialized) {
      if (Platform.OS === "ios") {
        return RNAmplitudeSDK.logRevenue(
          productIdentifier,
          quantity,
          amount,
          receipt
        );
      } else {
        return RNAmplitudeSDK.logRevenue(productIdentifier, quantity, amount);
      }
    } else {
      throw new Error(
        "You called Amplitude.logRevenue before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  setUserProperty(property, value) {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.setUserProperty(property, value);
    } else {
      throw new Error(
        "You called Amplitude.setUserPropertyOnce before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  unsetUserProperty(property) {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.unsetUserProperty(property);
    } else {
      throw new Error(
        "You called Amplitude.setUserPropertyOnce before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  addToUserProperty(property, amount) {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.addToUserProperty(property, amount);
    } else {
      throw new Error(
        "You called Amplitude.addToUserPropery before initializing it. Run new Amplitute(key) first."
      );
    }
  }

  setUserPropertyOnce(property, value) {
    if (amplitudeHasInitialized) {
      return RNAmplitudeSDK.setUserPropertyOnce(property, value);
    } else {
      throw new Error(
        "You called Amplitude.setUserPropertyOnce before initializing it. Run new Amplitute(key) first."
      );
    }
  }
}

export default Amplitude;
