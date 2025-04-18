import React from 'react';
import { useWidgetContext } from './context/WidgetContext';

const WidgetList = () => {
  const { widgetsState, addWidget, removeWidget } = useWidgetContext();

  return (
    <div>
      <button onClick={() => addWidget('Widget1')}>Add Widget 1</button>
      <button onClick={() => addWidget('Widget2')}>Add Widget 2</button>

      {widgetsState.map((widget) => (
        <div key={widget.id}>
          <widget.Component />
          <button onClick={() => removeWidget(widget.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default WidgetList;
