import PropTypes from 'prop-types';
import { Box } from 'utilities/Box';
import { Text } from 'utilities/Text';

export const Section = ({ title, children }) => (
  <Box
    m="40px auto"
    py={5}
    width="700px"
    flexDirection="column"
    borderRadius="normal"
    boxShadow="normal"
    bg="primary"
    as="section"
  >
    {title && (
      <Text color="black" fontWeight="bold" as="h2">
        {title}
      </Text>
    )}
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
