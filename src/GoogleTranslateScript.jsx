// GoogleTranslateScript.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const GoogleTranslateScript = () => {
  return (
    <Helmet>
      <script
        type="text/javascript"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        async
        defer
      ></script>
    </Helmet>
  );
};

export default GoogleTranslateScript;
