import React from 'react';
import { WidgetProvider } from './context/WidgetContext';
import './App.css';
import WidgetList from './WidgetList'; // Новий компонент для рендерингу віджетів

const App = () => {
  return (
    <WidgetProvider>
      <div className="App">
        <h1>Widget Manager</h1>
        <WidgetList />
      </div>
    </WidgetProvider>
  );
};

export default App;
