 import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { connect } from 'react-redux';
import { dispatch } from '../../store';
import { fetchQuestions, playAgain } from '../actions/quizz-actions'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import entities from 'entities'
import PropTypes from 'prop-types';

const OutWrapper = styled.View`
  flex: 1;
`

const Wrapper = styled.ScrollView`
  flex: 1;
`

const BackgroundImage = styled.Image`
  background-color: #ccc;
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`

const TitleWrapper = styled.View`
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  paddingBottom: 10px;
`

const Title = styled.Text`
  font-size: 30;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`

const Question = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #ffffff;
  margin-top: 25px;
  margin-horizontal: 20px;
`

const QuestionIcon = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const QuestionTextWrapper = styled.View`
  flex: 6;
`

const QuestionText = styled.Text`
  font-size: 20px;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
`

const PlayAgainButton = styled.TouchableOpacity`
  margin-bottom: 20px;
  padding: 15px 25px 15px 25px;
  border-radius: 20;
  backgroundColor: rgba(0, 0, 0, 0.8);
  position: absolute;
  bottom: 0;
  align-self: center;
`

const ButtonText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #ffffff
`





class Result extends React.Component {

  handlePlayAgainClick () {
    dispatch(playAgain())
    Actions.quiz1()
  }

  render() {
    let answer
    let isCorrect


    return(
      <OutWrapper>
        <BackgroundImage source={require('../../public/img/star.png')} />
        <Wrapper contentContainerStyle={{alignItems: 'center', justifyContent: 'flex-start', minHeight: '100%', paddingBottom: 120}}>
          <TitleWrapper>
            <Title>
              You scored
            </Title>
            <Title>
              {this.props.correctAnswers}/10
            </Title>
          </TitleWrapper>
          {this.props.questions.map((question, k) => {
            answer = this.props.answers[k]
            isCorrect = question.correct_answer === answer
            return (
              <Question key={k}>
                <QuestionIcon>
                  {isCorrect ?
                  <Icon name="check" size={35} color="#6AE368" />
                  :
                  <Icon name="close" size={35} color="#C62828" />}
                </QuestionIcon>
                <QuestionTextWrapper>
                  <QuestionText style={!isCorrect && {textDecorationLine: 'line-through', textDecorationColor: '#C62828', fontWeight: 'normal'}}>
                  {entities.decodeHTML(question.question)}
                  </QuestionText>
                </QuestionTextWrapper>
              </Question>
            )})}
        </Wrapper>
        <PlayAgainButton onPress={this.handlePlayAgainClick}>
          <ButtonText>Play Again ?</ButtonText>
        </PlayAgainButton>
      </OutWrapper>
    )
    WriteToFile()
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  answers: state.answers,
  correctAnswers: state.correctAnswers
})

export default connect(mapStateToProps)(Result)