import React from 'react';
import {View} from 'react-native';

import Main from './Pages/Main';
import {Theme} from './styles/Theme';

function App() {
  return (
    <View>
      <Theme>
        <Main />
      </Theme>
    </View>
  );
}

export default App;
