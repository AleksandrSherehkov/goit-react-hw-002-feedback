import PropTypes from 'prop-types';
import { Box } from 'utilities/Box';
import { ButtonStyled } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback, onReset }) => (
  <Box
    mt={5}
    as="div"
    display="flex"
    flexDirection="column"
    alignItems="center"
    gridGap={4}
  >
    {/* Кнопки фидбэка */}
    <Box as="ul" display="flex" gridGap={3} listStyle="none" m={0} p={0}>
      {options.map(option => (
        <li key={option}>
          <ButtonStyled
            type="button"
            aria-label={`Add ${option} feedback`}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </ButtonStyled>
        </li>
      ))}
    </Box>

    {/* Кнопка сброса */}
    <ButtonStyled
      type="button"
      aria-label="Reset feedback"
      onClick={onReset}
      $reset
    >
      reset
    </ButtonStyled>
  </Box>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func,
};
