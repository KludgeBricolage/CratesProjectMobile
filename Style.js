'use strict';

import React from 'react'

import {
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';

module.exports = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: Dimensions.get('window').height * .10,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
