import React from 'react'
import Card from './Card'

export const App = () => {
  const card1 = {
    isOnline: false,
    src: 'output-onlinejpgtools (1).jpg',
    name: 'james',
    place: 'new york',
    role: 'front-end developer',
    skills: ['ui/ux', 'front-end developer', 'HTML', 'Css', 'React', 'Node']
  }

  const card2 = {
    isOnline: true,
    src: 'output-onlinejpgtools (2).jpg',
    name: 'robert',
    place: 'California',
    role: 'full stack developer',
    skills: ['vlogging', 'web development', 'HTML', 'Css', 'javascipt', 'React', 'angular']
  }

  const card3 = {
    isOnline: true,
    src: 'output-onlinejpgtools (4).jpg',
    name: 'nancy',
    place: 'san fransisco',
    role: 'senior software developer',
    skills: ['c', 'c++', 'java programming', 'python', 'c# .net', 'mongo db']
  }
  return (
      <>
      <Card att={ card1 } />
      <Card att={ card2 } />
      <Card att={ card3 } />
      </>
  )
}
