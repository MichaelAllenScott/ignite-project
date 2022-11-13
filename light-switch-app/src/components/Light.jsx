import PropTypes from 'prop-types';
import lightOnImg from '../assets/light-on.png';
import lightOffImg from '../assets/light-off.png';

function Light({lightToggle}) {
  return (
    <div className="centered-flex-container">
      <div className="light-container">
        <img className="light-off-img" src={lightOffImg}/>
        <img className={`light-on-img ${lightToggle ? "light-on-state" : ""}`} src={lightOnImg}/>
      </div>
    </div>
  )
}

Light.defaultProps = {
  lightToggle: false
}

Light.propTypes = {
  lightToggle: PropTypes.bool
}

export default Light