import React, { useState,useEffect } from 'react'
import QuizItem from './QuizItem';
import FinalScore from './FinalScore';

export default function Quiz() {
 const[index,setIndex]=useState(0);
 const[score,setScore]=useState(0);
 const[answer,setAnswer]=useState(null);
 let articles=[{
    "key":"A",
    "question": "A flashing red traffic light signifies that a driver should do what?",
    "A": "stop",
    "B": "speed up",
    "C": "proceed with caution",
    "D": "honk the horn",
    "answer": "A"
  }, {
    "key":"B",
    "question": "A knish is traditionally stuffed with what filling?",
    "A": "potato",
    "B": "creamed corn",
    "C": "lemon custard",
    "D": "raspberry jelly",
    "answer": "A"
  }, {
    "key":"C",
    "question": "A pita is a type of what?",
    "A": "fresh fruit",
    "B": "flat bread",
    "C": "French tart",
    "D": "friend bean dip",
    "answer": "B"
  }, {
    "key":"D",
    "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
    "A": "landscape",
    "B": "caricature",
    "C": "still life",
    "D": "Impressionism",
    "answer": "B"
  }, {
    "key":"E",
    "question": "A second-year college student is usually called a what?",
    "A": "sophomore",
    "B": "senior",
    "C": "freshman ",
    "D": "junior ",
    "answer": "A"
  },{
    "question": "A student who earns a J.D. can begin his or her career as a what?",
    "A": "lawyer",
    "B": "bricklayer",
    "C": "doctor",
    "D": "accountant",
    "answer": "A"
  }, {
    "question": "A triptych is a work of art that is painted on how many panels?",
    "A": "two",
    "B": "three",
    "C": "five",
    "D": "eight",
    "answer": "B"
  }, {
    "question": "According to a famous line from the existentialist play 'No Exit' what is hell?",
    "A": "oneself",
    "B": "other people",
    "C": "little made large",
    "D": "hued in green and blue",
    "answer": "B"
  }, {
    "question": "According to a popular slogan, what state should people not 'mess with'?",
    "A": "New York",
    "B": "Texas",
    "C": "Montana",
    "D": "Rhode Island",
    "answer": "B"
  }, {
    "question": "According to a Yale University study, what smell is the most recognizable to American adults?",
    "A": "tuna",
    "B": "laundry",
    "C": "popcorn",
    "D": "coffee",
    "answer": "D"
  }, {
    "question": "According to folklore, the 'jackalope' is an antlered version of what animal?",
    "A": "chicken",
    "B": "rabbit",
    "C": "moose",
    "D": "snake",
    "answer": "B"
  }, {
    "question": "According to Greek mythology, who was Apollo's twin sister?",
    "A": "Aphrodite",
    "B": "Artemis",
    "C": "Venus",
    "D": "Athena",
    "answer": "B"
  }, {
    "question": "According to legend, if you give someone the 'evil eye' what are you doing?",
    "A": "cursing them",
    "B": "blessing a child",
    "C": "counting money",
    "D": "passing time",
    "answer": "A"
  }, {
    "question": "According to legend, in what country are you most likely to meet a leprechaun?",
    "A": "Ireland",
    "B": "Poland",
    "C": "Greenland",
    "D": "Scotland",
    "answer": "A"
  }]
 function add(value){
    setAnswer(value);
  }
 function updateQuestion(){
   if(answer===articles[index].answer)
        setScore(score+1);
       else if(answer!=null && score>0) 
        setScore(score-1)
       setIndex(index+1);
       setAnswer(null);
        if(index<articles.length){
      return(<QuizItem  key={articles[index].question}  setAnswer={setAnswer} element={articles[index]} index={index} add={add} updateQuestion={updateQuestion} />)
     }
      else{
        return(<FinalScore score={score}/>)
      }
    }
      
   if(index<articles.length){
  return(

      <QuizItem  key={articles[index].question}  setAnswer={setAnswer} element={articles[index]} index={index} add={add} updateQuestion={updateQuestion}/>)
    }
    else{
      return(<FinalScore score={score}/>)
    }
   }
