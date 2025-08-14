import { PureComponent } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { GlobalStyle } from 'utilities/GlobalStyle';

const STORAGE_KEY = 'feedback_counters_v1';
const FEEDBACK_OPTIONS = ['good', 'neutral', 'bad'];

export class App extends PureComponent {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);

        if (
          typeof parsed?.good === 'number' &&
          typeof parsed?.neutral === 'number' &&
          typeof parsed?.bad === 'number'
        ) {
          this.setState(parsed);
        }
      }
    } catch (_) {}
  }

  componentDidUpdate(_, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    }
  }

  handleLeaveFeedback = option => {
    this.setState(prev => ({ ...prev, [option]: prev[option] + 1 }));
  };

  handleReset = () => {
    this.setState({ good: 0, neutral: 0, bad: 0 });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedback() {
    const total = this.countTotalFeedback();
    return total ? Math.ceil((this.state.good / total) * 100) : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedback();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={FEEDBACK_OPTIONS}
            onLeaveFeedback={this.handleLeaveFeedback}
            onReset={this.handleReset}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
      </>
    );
  }
}
