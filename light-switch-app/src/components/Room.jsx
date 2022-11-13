import Light from './Light';
import Switch from './Switch';
import { useState } from 'react';

function Room() {
  const [lightToggle, setLightToggle] = useState(false);

  // Event bubbles up to this level and sets the light toggle
  const handleLightSwitchChange = state => {
    setLightToggle(state);
  };

  return (
    <div className='room-container'>
      <Light lightToggle={lightToggle} />
      <Switch lightToggle={lightToggle} handleLightSwitchChange={handleLightSwitchChange} />
    </div>
  )
}

export default Room