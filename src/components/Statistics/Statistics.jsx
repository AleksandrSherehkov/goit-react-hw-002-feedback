import PropTypes from 'prop-types';
import { Box } from 'utilities/Box';
import { Text } from 'utilities/Text';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const items = [
    { label: 'Good', value: good, color: 'good' },
    { label: 'Neutral', value: neutral },
    { label: 'Bad', value: bad, color: 'bad' },
    { label: 'Total', value: total, color: 'red', fontSize: 'xl' },
    {
      label: 'Positive feedback',
      value: `${positivePercentage}%`,
      color: 'button',
    },
  ];

  return (
    <Box mt={5} width="350px" gridGap={4} flexDirection="column" as="ul">
      {items.map(({ label, value, color, fontSize }) => (
        <li key={label}>
          <Text color={color} fontSize={fontSize}>
            {label}: <span>{value}</span>
          </Text>
        </li>
      ))}
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
