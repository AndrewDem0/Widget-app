import React, { createContext, useContext, useState } from 'react';

const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  const [widgetsState, setWidgetsState] = useState([]);

  const addWidget = (widgetName) => {
    let widgetImport;

    // Динамічний імпорт для кожного віджету залежно від його назви
    if (widgetName === 'Widget1') {
      widgetImport = import('../widgets/Widget1');
    } else if (widgetName === 'Widget2') {
      widgetImport = import('../widgets/Widget2');
    }

    // Завантажуємо віджет і додаємо його до стану
    widgetImport.then((module) => {
      setWidgetsState((prevState) => [
        ...prevState,
        { id: Date.now(), Component: module.default },
      ]);
    });
  };

  const removeWidget = (id) => {
    setWidgetsState(widgetsState.filter((widget) => widget.id !== id));
  };

  return (
    <WidgetContext.Provider value={{ widgetsState, addWidget, removeWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgetContext = () => useContext(WidgetContext);
