"use client";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Grid from "./grid";
import { HeroHighlight } from "./ui/hero-highlight";


// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI("AIzaSyDjcPK8nrUg7JGZOokCe2bZOohrUHx7d7o");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function formatMarkdown(content :any) {
  // Convert double asterisks to bold HTML tags
  content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Convert single asterisks to italic HTML tags
  content = content.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Insert new line HTML tags where necessary
  content = content.replace(/\n/g, '<br>');

  return content;
}




// Perform the search using the model
async function search(value: string) {
  try {
    const result = await model.generateContent(value);
    return formatMarkdown(result.response.text());
  } catch (error) {
    return "An error occurred while fetching the result.";
  }
}

const ChatSection = () => {
  const placeholderArray = [
    "Message TalkFlow",
    "Let's test your creativity",
    "Ask me anything",
  ];

  const [response, setResponse] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  const handleSearchSubmit = async (value: string) => {
    setQuestion(value);
    if (!value.trim()) {
      return; // Invalid input, do nothing
    }
    const result = await search(value);

    setResponse(result); // Update the state with the result
  };

  return (
    <HeroHighlight className="h-screen w-screen">
      <div className="h-[20vh]"></div>
      <div className="h-[60vh] flex justify-center items-center overflow-scroll scrollbar-none">
        <div className="relative flex flex-col gap-10 h-full w-[700px]">

         {!question ? (
            <div className="h-[50vh] overflow-visible">
            <Grid/>
          </div>
          ):(
            <div className="flex pb-[50px] justify-center items-center gap-3 absolute top-5 right-0">
            {question && (
              <>
                <div className="p-3 px-7 text-white bg-[#303030] rounded-3xl">
                  <div className="text-lg font-semibold">You : {question} </div>
                </div>
                <img
                  src="/user.png"
                  alt="user"
                  width={40}
                  className="rounded-full h-[40px] w-[40px]"
                />
              </>
            )}
          </div>
          )}

          {/* Response Div: Flows below the question */}
          <div className="flex pt-[50px] mt-[90px]">
            {response && (
              <>
                <img
                  src="/logo.jpg"
                  alt="logo"
                  width={40}
                  className="rounded-full h-[40px] w-[40px]"
                />
                <div className="p-4 px-7 ml-3  text-white bg-[#303030] rounded-3xl">
                  <h3 className="text-lg font-bold">TalkFlow:</h3>
                  <div dangerouslySetInnerHTML={{ __html: response }}></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex p-4">
        <PlaceholdersAndVanishInput
          placeholders={placeholderArray}
          onChange={() => {}}
          onSubmit={handleSearchSubmit} // This should be the correct handler now
        />
      </div>
    </HeroHighlight>
  );
};

export default ChatSection;
