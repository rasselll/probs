
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { dispatch } from '../../store'
import { fetchQuestions } from '../actions/quizz-actions'
import { Actions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types';


const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
`



const BackgroundImage = styled.Image`
  background-color: #ccc;
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`

const RocketImage = styled.Image`
  opacity: 0.8;
`

const TitleWrapper = styled.View`
  flex: 3;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 20px;
`

const Title = styled.Text`
  font-size: 40;
  text-align: left;
  color: #ffffff
`

const LightText = styled.Text`
  font-size: 20;
  text-align: center;
  color: #BECCE1;
  margin-top: 10px;
  margin-left: 5px;
`

const ButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`

const BeginButton = styled.TouchableOpacity`
  padding: 15px 25px 15px 25px;
  border-radius: 20;
  backgroundColor: rgba(0, 0, 0, 0.4);
`

const ButtonText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #ffffff
`

class Home extends Component {
    constructor(props) {
    super(props)
    this.state = {
      prevScreenTitle: this.props.navigation.state.params.prevScreenTitle,
      people: this.props.navigation.state.params.people,
    };
  }

  componentDidMount() {
    dispatch(fetchQuestions())
  }

  handleStartClick() {
    setTimeout(()=>{Actions.quizgame1()}, 200)
    this.refs.rocketImage.transitionTo({marginBottom: 700, opacity: 0})
  }

  render() {
    return(
      <Wrapper>
        <BackgroundImage source={require('../../public/img/star.png')} />
        <TitleWrapper>
          <Title>
            A quizz game
          </Title>
          <Title>
            To never
          </Title>
          <Title>
            Forget
          </Title>
          <LightText>triviaapp.com</LightText>
        </TitleWrapper>
        <ButtonWrapper>
          <Animatable.View duration={1000} easing='ease-in-out' ref='rocketImage' style={{width: 95, height: 95, marginRight: 0, marginBottom: 20, opacity: 0.9, transform:[{rotate: '-45 deg'}]}}>
            <Icon name="rocket" size={95} color="#ffffff" />
          </Animatable.View>
          <BeginButton onPress={() => this.handleStartClick()}>
            <ButtonText>Start your adventure
           </ButtonText>
          </BeginButton>
        </ButtonWrapper>
      </Wrapper>
    )
  }
}

export default Home