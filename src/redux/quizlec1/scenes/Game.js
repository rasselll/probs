import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { connect } from 'react-redux';
import { dispatch } from '../../store';
import PropTypes from 'prop-types';
import { answerQuestion, answerLastQuestion } from '../actions/quizz-actions'
import {Actions} from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import entities from 'entities'
import myData from '../actions/customData.json';

import AnimatedBar from "react-native-animated-bar";


const Wrapper = styled.View`
backgroundColor: #000;
  flex: 1;
  align-items: stretch;
  justify-content: space-between;
`

const BackgroundImage = styled.Image`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`

const CategoryWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

const CountWrapper = styled.View`
  flex: 0.5;
`

const TitleWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled.Text`
  font-size: 20;
  color: #ffffff
  margin-top: 50px;
`

const QuestionWrapper = styled.View`
  flex: 5;
  align-items: center;
  justify-content: center;

`

const QuestionText = styled.Text`
  font-size: 27;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  color: #fff;
`

const styles = StyleSheet.create({
  container: {
    flex: 0,
    
   
  },
  rowText: {
    marginRight: 20,
  },
  row: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  barText: {
    backgroundColor: "#000",
    color: "#FFF",
  },
});

const LightText = styled.Text`
  font-size: 20;
  text-align: center;
  color: #BECCE1;
  font-weight: bold;
  margin-bottom: 5px;
`

const ButtonsWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 20px;
  justifyContent: space-around;

`

const TrueButton = styled.TouchableOpacity`
  height: 55;
  width: 300;
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 10;
  backgroundColor: #2c3e50;

`

const QuestionOne = styled.TouchableOpacity`
  height: 55;
  width: 300;
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 10;
  backgroundColor: #2c3e50;

`

const QuestionTwo = styled.TouchableOpacity`
 height: 55;
  width: 300;
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 10;
  backgroundColor: #2c3e50;
`


const FalseButton = styled.TouchableOpacity`
 height: 55;
  width: 300;
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 10;
  backgroundColor: #2c3e50;
`

const ButtonText = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  padding-top: 12;
`

class Game extends React.Component {
   state = {
    progress: 0,
  };



  handleAnswerQuestion (answer) {
    const {count} = this.props
    this.refs.question.fadeIn(500)
    this.refs.title.fadeIn(500)
    if (count >= 9) {
      dispatch(answerLastQuestion(answer))
      Actions.quizresult1()
    } else {
      dispatch(answerQuestion(answer))

         this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });

      Actions.quizgame1()

    }
     
  }
  render () {
    const {count, currentQuestion} = this.props
    return (

      <Wrapper>
        <BackgroundImage source={require('../../public/img/star.png')} />
                                           <View style={styles.container}>

        <AnimatedBar 
        progress={this.state.progress}

        borderWidth={0}/>
      </View>
        <Animatable.View ref='title' style={{flex: 0.5, alignItems: 'center', justifyContent: 'flex-end'}}>
          <Title>
     
          </Title>
        </Animatable.View>
        <CountWrapper>
          <LightText>
            {count + 1} of 10

          </LightText>

        </CountWrapper>
        <Animatable.View ref='question' style={{justifyContent: 'flex-start', flex: 3}}>
          <QuestionText>
            {entities.decodeHTML(currentQuestion.question)}
          </QuestionText>
        </Animatable.View>
        <ButtonsWrapper>
          <FalseButton onPress={() => this.handleAnswerQuestion('False')}>
            <ButtonText><Animatable.Text ref='false'>{myData.results[count].category[2]}</Animatable.Text></ButtonText>
          </FalseButton>
          </ButtonsWrapper>
           <ButtonsWrapper>
          <TrueButton onPress={() => this.handleAnswerQuestion('True')}>
            <ButtonText>{myData.results[count].category[3]}</ButtonText>
          </TrueButton>
           </ButtonsWrapper>
           <ButtonsWrapper>
          <QuestionTwo onPress={() => this.handleAnswerQuestion('False')}>
            <ButtonText><Animatable.Text ref='false'>{myData.results[count].category[0]}</Animatable.Text></ButtonText>
          </QuestionTwo>
          </ButtonsWrapper>
          <ButtonsWrapper>
          <QuestionOne onPress={() => this.handleAnswerQuestion(myData.results[count].category[count])}>
            <ButtonText>{myData.results[count].category[1]}</ButtonText>
          </QuestionOne>
        </ButtonsWrapper>
      </Wrapper>
    )
  }
}
const mapStateToProps = state => ({
  count: state.questionNumber,
  currentQuestion: state.currentQuestion
})

export default connect(mapStateToProps)(Game)