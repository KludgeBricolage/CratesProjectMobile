# CratesProjectMobile
Mobile Module

Uses React Native. Will soon grab data from the web's REST API.

Install:
  - Get ReactNative to work
  - Emulator should use Host GPU (ReactNativeMaps quickfix)
  - git clone <this project>
  - cd <to project> && rnpm link
  
Update Log:
  - Implemented NativeBase
  - The 'huge comment' was removed. Check history for reference.
  - Added icons
  - GlobalHeader
  
Next:
  - Adding Header functionality
  - Changing the dummy.json to be more realistic (in preparation for filtering and searching)

React Native fixes:
  - watchman watch-del-all
  - rm -fr $TMPDIR/react-*
  - npm cache clean
  - cd android/ && ./gradlew clean 
