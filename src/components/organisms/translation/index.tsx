import React, { useState } from "react";
import "./TranslationComponent.css"; // Import CSS file for styling
import TitleSectionNonGlowing from "../../molecules/TitleSectionNonGlowing";

const AjiTerjem = () => {
  const [englishText, setEnglishText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  async function query(data: any) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/atlasia/Terjman-Large",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}

    
  const submit = async (data: any) => {
    // Placeholder function for submitting data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Submission successful");
      }, 1000);
    });
  };
  

  const handleTranslate = async () => {
    try {
        const response = await query({ "inputs": englishText });
        setTranslatedText(response[0].generated_text);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

    const handleSubmit = async () => {
        try {
        const response = await submit({ "english_text": englishText, "translated_text": translatedText });
        console.log("Submitted translation:", response);
        } catch (error) {
        console.error("Submit error:", error);
        }
    };

  return (
    <div className="translation-container">
        <TitleSectionNonGlowing
        title=""
        subtitle="Aji Nterjmou 👨‍💻"
        classes="mb-4"
      />
      <div className="inputs-container">
        <textarea
          className="input-textarea"
          value={englishText}
          onChange={(e) => setEnglishText(e.target.value)}
          placeholder="Enter English text..."
        />
        <textarea
          className="output-textarea"
          value={translatedText}
          onChange={(e) => setTranslatedText(e.target.value)}
          placeholder="Translated text..."
        />
      </div>
      <div className="buttons-container">
        <button className="translate-button bg-blue-100 hover:bg-blue-200 text-blue-900 font-bold py-2 px-4 rounded mr-4" onClick={handleTranslate}>Translate</button>
        <button className="submit-button bg-green-100 hover:bg-green-200 text-green-900 font-bold py-2 px-4 rounded mr-4" onClick={handleSubmit}>Submit new version</button>
      </div>
    </div>
  );
};

export default AjiTerjem;