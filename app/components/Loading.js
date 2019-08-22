import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

const Loading = ({ text = 'Loading', speed = 300 }) => {
  const [ content, setContent ] = useState(text);

  useEffect(() => {
    const interval = window.setInterval(() => {
      content === text + '...'
          ? setContent(text)
          : setContent(content => content + '.')
    }, speed);

    return () => {
      window.clearInterval(interval);
    }
  }, [text, speed]);

  return (
      <p style={styles.content}>
        {content}
      </p>
  )
};

export default Loading;

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
}