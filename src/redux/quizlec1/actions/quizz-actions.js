
var customData = require('./customData.json');


export function fetchQuestions() {
  return dispatch => {
    const payload = customData;
    dispatch({
      type: 'FETCH_QUESTIONS',
      payload: payload.results,
    });
  }
}

export function answerQuestion(answer) {
  return dispatch => {
    dispatch({
      type: 'ANSWER_QUESTION',
      answer
    })
  }
}

export function answerLastQuestion(answer) {
  return dispatch => {
    dispatch({
      type: 'ANSWER_LAST_QUESTION',
      answer
    })
  }
}


export function playAgain() {
  return dispatch => {
    dispatch({
      type: 'PLAY_AGAIN'
    })
  }
}