import PropTypes from 'prop-types';
import switchOnImg from '../assets/switch-on.png';
import switchOffImg from '../assets/switch-off.png';

function Switch({lightToggle, handleLightSwitchChange}) {
  return (
    <div className="centered-flex-container">
      <div className="switch-container">
        <img className="switch-off-img" src={switchOffImg} onClick={() => handleLightSwitchChange(!lightToggle)} />
        <img className={`switch-on-img ${lightToggle ? "switch-on-state" : ""}`} src={switchOnImg} onClick={() => handleLightSwitchChange(!lightToggle)} />
      </div>
    </div>
  )
}

Switch.defaultProps = {
  lightToggle: false
}

Switch.propTypes = {
  lightToggle: PropTypes.bool
}

export default Switch