import React, { useState } from 'react';

function CustomWidget({ widget }) {
  const [count, setCount] = useState(0);

  return <>
    <h1>Counter: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Inc</button>
  </>;
}

PremiumPortal.Dashboard.registerWidget(CustomWidget, {
  name: 'CustomWidget',
  displayName: 'Custom Widget',
  description: 'Just a custom external widget',

  defaultConfig: {
    title: {
      label: 'Title',
      type: 'string',
      value: 'Custom Widget',
    }
  }
});