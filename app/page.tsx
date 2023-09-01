"use client";
import { useState } from "react";
import axios, { AxiosError } from "axios";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [pageData, setPageData] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function getWebpageHTML(): Promise<string> {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      setPageData("");
      setError(axiosError.message);
      throw new Error(`Error fetching webpage: ${axiosError.message}`);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleButtonClick = async () => {
    const data = await getWebpageHTML();

    console.log("data", data);
    const footerString = "<!-- e hearst/common/author_body.tpl -->";

    // Find the position of the search string
    const searchStringIndex = data.indexOf(footerString);

    if (searchStringIndex !== -1) {
      // Delete content after the search string
      const modifiedHtmlString = data.substring(
        0,
        searchStringIndex + footerString.length
      );
      setPageData(modifiedHtmlString);
    } else {
      setPageData(data);
    }
  };

  return (
    <div className="mx-10 mt-10">
      <div className="text-4xl text-center">Welcome to chron reader.</div>
      <div className="text-xl text-center pt-10">
        The News should be free. So I created this app that just takes in a
        chronical article URL (for ex.
        https://www.sfchronicle.com/crime/article/sf-crime-assault-bat-shopkeeper-dies-18336329.php)
        and then returns a version of the article that is free to read so that
        you also never have to pay them.
      </div>
      <div className="flex flex-row items-center gap-4 mt-20 mx-40">
        <input
          id="urlInput"
          type="text"
          className="w-full px-4 py-2 rounded-lg border-2 border-blue-200 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="https://www.example.com"
          value={url}
          onChange={handleInputChange}
        />

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleButtonClick}
        >
          Submit
        </button>
      </div>

      <div className="w-full border-2 border-gray-400 mt-20 rounded-lg">
        {!pageData ? (
          <p className="p-20">Your page will render here</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: pageData }} />
        )}
      </div>
      <div>{error && <p>There is an error: ${error}</p>}</div>
    </div>
  );
}
