import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../../components/Container';
import GlobalStyle from '../../utils/GlobalStyle';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MyTasks');
    }, 2000);
  }, []);

  return (
    <Container noTopInset>
      <View style={styles.container}>
        <Image
          source={require('../../assets/checklist.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>RNTodo-List</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0080ff',
  },
  logo: {
    width: 150,
    height: 150,
    margin: 20,
  },
  text: {
    fontSize: 40,
    color: '#ffffff',
  },
});

export default SplashScreen;
