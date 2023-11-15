// App.js
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (window.google && window.google.translate) {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    }
  }, []);

  return (
    <div>
      {/* Your app content */}
      <p>Welcome to my React app!</p>

      {/* Google Translate element */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default App;
