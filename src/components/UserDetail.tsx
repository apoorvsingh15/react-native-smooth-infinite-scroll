import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

interface User {
  user: {
    email: string;
    firstname: string;
    image: string;
    ip: string;
    lastname: string;
    macAddress: string;
    password: string;
    username: string;
    uuid: string;
    website: string;
  };
}

const UserDetail = ({user}: User) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.userPic} source={{uri: user.image}} />
      </View>
      <View style={styles.userDetails}>
        <Text>
          {user.firstname} {user.lastname}
        </Text>
        <Text>{user.email}</Text>
        <Text>{user.username}</Text>
        <Text>{user.website}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: 'green',
  },
  userPic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default UserDetail;
