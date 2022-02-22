import PropTypes from 'prop-types';
import './Statistics.css'

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className="statistics_list">
      <li className="statictics_item">Good: {good}</li>
      <li className="statictics_item">Neutral: {neutral}</li>
      <li className="statictics_item">Bad: {bad}</li>
      <li className="statictics_item">Total: {total}</li>
      <li className="statictics_item">Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;