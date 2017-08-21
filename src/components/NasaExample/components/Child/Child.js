import React from 'react';

const styles = {
  element: {
    width: 200
  }
};
export default ({id, name, onClick}) =>
  <div onClick={() => onClick(id)} style={styles.element}>
    {name}
  </div>;
