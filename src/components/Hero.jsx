import React, { useState } from 'react';
import Display from './Display';
import axios from 'axios';
import {languages} from './languages';


const Hero = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to translate.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setTranslatedText('');

    try {
      const options = {
        method: 'POST',
        url: 'https://google-translator9.p.rapidapi.com/v2',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
          'Content-Type': 'application/json'
        },
        data: {
          q: inputText,
          source: 'en', 
          target: targetLanguage,
          format: 'text'
        }
      };

      const response = await axios.request(options);

      if (response.data?.data?.translations?.[0]?.translatedText) {
        setTranslatedText(response.data.data.translations[0].translatedText);
      } else {
        setTranslatedText('No translation found.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during translation.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-sans">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-2xl text-gray-100">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Text Translator
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Enter text and select a language to translate.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <textarea
            className="w-full md:w-2/3 h-40 p-4 bg-gray-700 text-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-500"
            placeholder="Type your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <div className="w-full md:w-1/3 flex flex-col justify-between">
            <div className="mb-4">
              <label htmlFor="language" className="block text-sm font-medium text-gray-300 mb-2">
                Select Language:
              </label>
              <select
                id="language"
                className="w-full p-3 bg-gray-700 text-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleTranslate}
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Translating...' : 'Translate'}
            </button>
          </div>
        </div>

        {/* Pass props to Display */}
        <Display
          translatedText={translatedText}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Hero;
