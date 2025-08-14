import PropTypes from 'prop-types';
import { Text } from 'utilities/Text';

export const Notification = ({ message }) => (
  <div role="status" aria-live="polite">
    <Text>{message}</Text>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
