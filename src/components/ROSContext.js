import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const rosObj = {
  ROS: null,
  listener: null,
  url: "ws://localhost:9090",
  isConnected: false,
  topics: [],
}

const ROSContext = createContext([{}, () => {}]);

const ROSProvider = (props) => {
  const [ ros, setROS ] = useState(rosObj);
  return (
    <ROSContext.Provider value={[ros, setROS]}>
      {props.children}
    </ROSContext.Provider>
  );
}

ROSProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ROSContext, ROSProvider };
