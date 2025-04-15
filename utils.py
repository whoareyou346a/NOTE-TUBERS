import openai
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Ensure the API key is being loaded
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("API Key is missing! Please set it in your .env file.")

# Set the OpenAI API key
openai.api_key = api_key

def summarize_text(text):
    # Define the prompt
    prompt = f"Summarize the following lecture into bullet points:\n\n{text}"
    
    try:
        # Make API call to OpenAI using the new method for openai>=1.0.0
        response = openai.Completion.create(
            model="gpt-3.5-turbo",  # Use the model of your choice (e.g., GPT-3.5, GPT-4)
            prompt=prompt,
            max_tokens=500  # Adjust max_tokens based on your preference
        )
        
        # Return the summary
        return response.choices[0].text.strip()  # Access the 'text' field for the summary
    except Exception as e:
        return f"Error occurred: {str(e)}"
