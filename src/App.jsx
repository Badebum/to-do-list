import React from 'react';
import Section from './components/Section/Section'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Notification from './components/Notification/Notification'
import Statistics from './components/Statistics/Statistics'

function App() {
  return   (
  <div>
  <Section titel="Please leave feedback">
<FeedbackOptions options={["good", "neutral", "bad"]} />
  </Section>
<Notification />
  <Section titel="Statistics">
<Statistics />
  </Section>
  </div>
  )
}

export default App;
