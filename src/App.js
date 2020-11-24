import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics.js';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section.js';
import Notification from './components/Notification/Notification.js';

export default class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addReview = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((el, acc) => el + acc, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <Section title="Leave your feedback">
          <FeedbackOptions onLeaveFeedback={this.addReview}></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
  }
}

// не понимаю что нужно передавать в опции FeedbackOptions???
