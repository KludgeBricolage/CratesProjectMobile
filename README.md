# Project Crates Mobile Module
iACADEMY Software Engineering - Junior Year  
[Thesis] Crates: Community Marketplace

<b>Versions</b> 
  - `react-native-cli: 1.2.0`
  - `react-native: 0.38.0`

<b>Setup</b>
1. Get ReactNative to work :: http://facebook.github.io/react-native/releases/0.38/docs/getting-started.html#content
2. If using an emulator, it should use Host GPU (ReactNativeMaps quickfix)
3. Clone this repository
4. In the project directory, run: `npm install` and `rnpm link`

<b>ReactNative Common Fixes</b>
  - watchman watch-del-all
  - rm -fr $TMPDIR/react-*
  - npm cache clean
  - cd android/ && ./gradlew clean

<b>About</b>  

Uses React Native with NativeBase.  
Gets data from Web Module's endpoints.  
Web Module's API needs to be hosted (ngrok).  

<b>Note</b>  

ReactNative isn't taught at iACADEMY so we apologize in advance.  
We used our thesis as an opportunity to learn about languages and technologies not taught at iACADEMY.  

If you are an iACADEMY student looking to contact us:  
1. Create an `Issue` here on GitHub or  
2. Find my details at iACADEMY; my student id is `2013-01146`  
