import React from 'react';
import { useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div>
      <p>Your component content goes here.</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default MyComponent;
