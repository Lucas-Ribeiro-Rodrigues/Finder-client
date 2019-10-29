import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { getItemsFromUser } from '../../../networking/API'

// import { Container } from './styles';

export default class UserItemsList extends Component {

  componentDidUpdate(prevProps)
  {
      getItemsFromUser(this.props.email)
      .then(value => this.userItems = value);
  }

  render() {
    return <Text> Lista de objetos do usuário </Text>;
  }
}
