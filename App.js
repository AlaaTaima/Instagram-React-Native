import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ficon from 'react-native-vector-icons/Feather';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import Eicon from 'react-native-vector-icons/Entypo';

import Card from './component/Card/Card.js';

class App extends Component {
  state = {
    iconActive: false,
    active: false,
    color: 'white',
    url:
      'https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  };
  render() {
    const { color, url, active, iconActive } = this.state;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon name="photo-camera" size={26} color="white" />
            <Image
              source={{
                uri: 'https://www.balancespa.com/images/instagram-icon.png'
              }}
              resizeMode="contain"
              style={{ width: 200, height: 60 }}
            />
            <Ficon name="send" size={26} color="white" />
          </View>
          <View style={styles.stories}>
            <View style={styles.stories__header}>
              <Text style={{ color: 'white' }}>Stories</Text>
              <View style={styles.stories__title}>
                <Icon name="play-arrow" size={23} color="white" />
                <Text style={{ color: 'white' }}>Watch all</Text>
              </View>
            </View>
            <View style={styles.stories__photos}>
              <View style={styles.stories__photo}>
                <Image
                  source={{
                    uri:
                      'http://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
                  }}
                  style={styles.stories__singlePhoto}
                />
                <Text style={{ color: 'white', fontSize: 10, paddingTop: 5 }}>
                  Your Story
                </Text>
              </View>
              <Card />
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.main}>
              <View style={styles.main__title}>
                <Image
                  source={{
                    uri:
                      'http://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
                  }}
                  style={styles.stories__singlePhoto}
                />
                <View style={styles.main__subTitle}>
                  <Text style={{ color: 'white', fontSize: 14 }}>
                    Alaa_Taima
                  </Text>
                  <Text style={{ color: 'white', fontSize: 14 }}>Gaza</Text>
                </View>
              </View>
              <Micon name="dots-horizontal" size={26} color="white" />
            </View>
            <Image
              source={{
                uri: url
              }}
              style={{ width: '100%', height: 250 }}
            />
            <View style={styles.body__icons}>
              <View style={styles.body__icons1}>
                <Micon
                  name="heart"
                  size={26}
                  color={color}
                  style={{ paddingRight: 9 }}
                  style={active ? styles.btnActive : styles.btn}
                  onPress={() => this.setState({ active: !active })}
                />
                <Ficon
                  name="message-circle"
                  size={26}
                  color="white"
                  style={{ paddingLeft: 9 }}
                />
                <Ficon
                  name="send"
                  size={26}
                  color="white"
                  style={{ paddingLeft: 9 }}
                />
              </View>
              <View style={styles.body__icons2}>
                <Eicon
                  name="dot-single"
                  size={26}
                  color="white"
                  onPress={() =>
                    this.setState({
                      url:
                        'https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    })
                  }
                />
                <Eicon
                  name="dot-single"
                  size={26}
                  color="gray"
                  onPress={() =>
                    this.setState({
                      url:
                        'https://specials-images.forbesimg.com/imageserve/5db360fb616a450007049d2d/960x0.jpg?fit=scale'
                    })
                  }
                />
              </View>
              <Icon
                name="bookmark"
                size={26}
                color="white"
                style={iconActive ? styles.iconActive : styles.icon}
                onPress={() => this.setState({ iconActive: !iconActive })}
              />
            </View>
            <Text style={{ color: 'white' }}>
              Liked by : alaa_taima and 21 others
            </Text>
            <Text style={{ color: 'white' }}>
              #Interested In React_Native,Web,Coding.
            </Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#111111'
  },
  header: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  stories: {
    height: 130,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  stories__header: {
    backgroundColor: '#111111',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  stories__title: {
    flexDirection: 'row'
  },
  stories__photos: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  main__title: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main__subTitle: {
    paddingLeft: 10,
    color: 'white'
  },
  body__icons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  body__icons1: {
    flexDirection: 'row'
  },
  body__icons2: {
    flexDirection: 'row'
  },
  btnActive: {
    color: 'red'
  },
  btn: {
    color: 'white'
  },
  iconActive: {
    color: 'gray'
  },
  icon: {
    color: 'white'
  }
});

export default App;
