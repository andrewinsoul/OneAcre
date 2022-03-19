import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {SafeAreaView, StatusBar} from 'react-native';
import {useStyles} from './src/styles';
import {MapScreen} from './src/screens/mapScreen';
import {readFromStorage, writeToStorage} from './src/utils/localStorage';

const App = () => {
  useEffect(() => {
    const loadStorage = async () => {
      try {
        const farmLand = await readFromStorage('farmLand');
        if (!farmLand) {
          await writeToStorage('farmLand', []);
        }
      } catch (err) {
        Alert.alert('Error', 'An error occured when trying to load storage');
      }
    };
    loadStorage();
  }, []);
  const styles = useStyles();
  return (
    <SafeAreaView style={styles.whiteBackground}>
      <StatusBar barStyle="light-content" />
      <MapScreen />
    </SafeAreaView>
  );
};

export default App;
