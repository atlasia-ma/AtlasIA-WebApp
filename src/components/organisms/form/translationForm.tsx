import React, { useState } from 'react';
// import refreshIcon from '../../assets/images/icon/animated-refresh.gif'; // Import animated refresh icon
import refreshIcon from '../../../assets/images/icon/refresh.png'; // Import animated refresh icon
import TitleSectionNonGlowing from "../../molecules/TitleSectionNonGlowing";

const AjiTerjem = () => {
  const [sentence, setSentence] = useState('');
  const [confidence, setConfidence] = useState('medium');
  const [language, setLanguage] = useState('english');
  const [translation, setTranslation] = useState('');
  const [audioRecording, setAudioRecording] = useState(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      sentence,
      confidence,
      language,
      translation,
      audioRecording
    });
    setSentence('');
    setConfidence('medium');
    setLanguage('english');
    setTranslation('');
    setAudioRecording(null);
  };

  const handleRecordAudio = () => {
    console.log('Recording audio...');
  };

  return (
    <div className="max-w-2/3 mx-auto mt-8 p-6" style={{ marginTop: '40px' }}>
      {/* <h2 className="text-6xl font-semibold mb-4 text-white" style={{ textAlign: 'center' }}>Aji Nterjmou 👨‍💻</h2> */}
      <TitleSectionNonGlowing
        title=""
        subtitle="Aji Nterjmou 👨‍💻"
        classes="mb-4"
      />
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative" style={{ marginTop: '20px' }}>
          {/* <label htmlFor="translation" className="block text-md font-medium text-white" style={{ marginTop: '40px' }}>Translation:</label> */}
          <div className="placeholder-sentence text-xl bg-cover bg-center h-32 flex items-center justify-center">
            <button className="refresh-icon absolute right-2" onClick={() => setSentence('New placeholder sentence')}>
              <img src={refreshIcon} style={{ width: '40px' }} alt="Refresh Icon" />
            </button>
            <p className="text-white font-bold text-center">{sentence || 'Aji n3awed lik wa7ed nokta naadya a sat'}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="translation" className="block text-md font-medium text-white">Translation:</label>
          <textarea id="translation" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={translation} onChange={(e) => setTranslation(e.target.value)}></textarea>
        </div>

        <div className="mb-4">
        <label htmlFor="translation" className="block text-md font-medium text-white">Language:</label>
          <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="english">English</option>
            <option value="french">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        <div className="mb-4">
        <label htmlFor="translation" className="block text-md font-medium text-white">Confidence level:</label>
          <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" value={confidence} onChange={(e) => setConfidence(e.target.value)}>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        
        <button type="submit" className="bg-green-500 hover:bg-green-700 text-blanc font-bold py-2 px-24 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AjiTerjem;


// #525f7f text color
// #171941 bg color doda