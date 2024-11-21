#Format the date
- npm install date-fns --save

#React navigation. allows us to implement a
#navigation system between views
- npm install @react-navigation/native
- npm install react-native-screens 
- npm install react-native-safe-area-context
- npm install @react-navigation/native-stack
  #MainActivity.java
  import android.os.Bundle;
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
#If you have an error "RNCSafeAreaProvider" was not 
#found in the UIManager Error
- Uninstall APP from phone
- npm link react-native-safe-area-context
- cd android/ -> ./gradlew clean -> cd .. -> 
  npx react-native run-android