# CratesProjectMobile
Mobile Module

Uses React Native. Will soon grab data from the web's REST API.

Install:
  - Get ReactNative to work
  - Emulator should use Host GPU (ReactNativeMaps quickfix)
  - git clone <this project>
  - cd <to project> && rnpm link

React Native fixes:
  - watchman watch-del-all
  - rm -fr $TMPDIR/react-*
  - npm cache clean
  - cd android/ && ./gradlew clean

Update Log:
  - Header can go back :: Map (main) is on TODO
  - Using DrawerLayoutAndroid as a sidebar/drawer
  - Temporary file: src/scenes/Drawer.js

TODO:
  - Implement Drawer.js to the app, see code for issues
  - Changing the dummy.json to be more realistic (in preparation for filtering and searching)
  - Think of a function to replace Map's back (since no back on main page) OR pull-right if button is just one
