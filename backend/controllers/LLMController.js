const { GoogleGenerativeAI } = require("@google/generative-ai");

const generateLLMResponse = async (prompt, api_key) => {
    try{
        const genAI = new GoogleGenerativeAI(api_key);

        const model = genAI.getGenerativeModel({model: 'gemini-pro'});

        const result = await model.generateContent(prompt);

        const response = await result.response;

        return response.text();
    } catch (err){
        console.error('Error generating response:', err);
        throw new Error('Failed to generate response from Gemini API');
    }
}

const getLLMresponse = async (prompt)=>{

    const API_KEY = process.env.GOOGLE_API_KEY;

    try {
        const llmResponse = await generateLLMResponse(prompt, API_KEY);

        console.log(llmResponse);
        return llmResponse;
    } catch (error) {
        console.error('LLM Response Error:', error);
        throw error;
    }
};

module.exports = getLLMresponse;