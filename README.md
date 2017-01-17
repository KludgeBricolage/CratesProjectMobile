# CratesProjectMobile
Mobile Module

Uses React Native. Will soon grab data from the web's REST API.

Versions:
  - react-native-cli: 1.2.0
  - react-native: 0.38.0

Install:
  - Get ReactNative to work :: http://facebook.github.io/react-native/releases/0.38/docs/getting-started.html#content
  - Emulator should use Host GPU (ReactNativeMaps quickfix)
  - git clone <this project>
  - cd <to project> && rnpm link

React Native fixes:
  - watchman watch-del-all
  - rm -fr $TMPDIR/react-*
  - npm cache clean
  - cd android/ && ./gradlew clean

Update Log:
  - All Scenes can now use the Drawer (header functionality)
  - Deleted temporary file: src/scenes/Drawer.js

TODO:
  - Changing the dummy.json to be more realistic (in preparation for filtering and searching)
  - Drawer content and Details design
