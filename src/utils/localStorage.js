import AsyncStorage from '@react-native-async-storage/async-storage';

export const writeToStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(String(key), JSON.stringify(value));
  } catch (err) {
    throw err;
  }
};

export const readFromStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (err) {
    throw err;
  }
};
