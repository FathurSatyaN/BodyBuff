<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
import React, {useRef,useEffect} from 'react';
import { View, TextInput, StyleSheet,Dime, Dimensions,Animated,TouchableOpacity } from 'react-native';
import { SearchNormal1,Add } from 'iconsax-react-native';

const SearchBar = ({ searchPhrase, setSearchPhrase }) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <Animated.View style={[{gap: animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 12],
      }),}]}>
        <Animated.View style={[styles.container, {transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 0.8, 1],
                  outputRange: [0, 1.2, 1],
                }),
              },
            ],}]}>
              <SearchNormal1 size="24"  color="#2D2C2C" style={styles.icon}/>
              <TextInput
                style={{ marginLeft: 1, flex: 1,marginVertical: 6, }} // Style untuk TextInput
                placeholder="Search" value={searchPhrase} onChangeText={setSearchPhrase} borderWidth={0}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                autoFocus={true}
              />
              
        </Animated.View>
    </Animated.View>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import React from 'react';
import { View, TextInput, StyleSheet,Dime, Dimensions } from 'react-native';
import { SearchNormal1 } from 'iconsax-react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <SearchNormal1 size="24"  color="#2D2C2C" style={styles.icon}/>
      <TextInput
        style={{ marginLeft: 10, flex: 1,marginVertical: 8, }} // Style untuk TextInput
        placeholder="What do you think ?"
      />
    </View>
>>>>>>> 1d2eedd24a3e82f37869568ca679aaf398ffa437
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default SearchBar;

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 28,
    },
    container: {
        flexDirection: 'row', 
        alignItems: 'center' ,
        marginBottom: 10, 
        borderRadius:20,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
        marginVertical: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginHorizontal: 10,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
        marginTop: -16  ,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginHorizontal: 0,
>>>>>>> 1d2eedd24a3e82f37869568ca679aaf398ffa437
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
        shadowOffset: {
        width: 0,
        height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 20,
    }
})