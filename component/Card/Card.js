import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Data from '../data';

const Card = () => {
  return (
    <ScrollView horizontal={true}>
      {Data.map(user => {
        return (
          <View style={styles.stories__photo} key={user.id}>
            <Image
              source={{ uri: user.photo }}
              style={styles.stories__singlePhoto}
            />
            <Text style={{ color: 'white', fontSize: 10, paddingTop: 5 }}>
              {user.name}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stories__photo: {
    width: 60,
    height: 80
  },
  stories__singlePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#b3399d'
  }
});

export default Card;
