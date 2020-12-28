import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';
import UserDetail from '../components/UserDetail';

interface Users {
  data: [
    {
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
    },
  ];
}

declare const global: {HermesInternal: null | {}};

const Main = () => {
  const [users, setUsers] = useState<Users | any>([]);
  useEffect(() => {
    axios
      .get('https://fakerapi.it/api/v1/users?_quantity=1000')
      .then((response: any) => {
        setUsers(response?.data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const renderItem = useCallback(({item}) => <UserDetail user={item} />, []);
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.uuid}
      maxToRenderPerBatch={8}
      showsVerticalScrollIndicator={false}
      windowSize={15}
    />
  );
};

export default Main;
