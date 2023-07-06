import { LineWave } from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Loader = ({ visible }) => {
  return (
    <LineWave
      height="90"
      width="90"
      color="#232caa"
      ariaLabel="tail-spin-loading"
      radius="1"
      visible={visible}
    />
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;
