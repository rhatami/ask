import "./App.css";
import { useRef, useState } from "react";
import MiniSearch from "minisearch";
import { DataArray } from "./Components/Data";
import Popup from "./Components/Popup";
import {
  isBlank,
  popupContent,
  splitNewlines,
  summarize,
} from "./Components/Functions";

const helperText = `عبارت های قابل جستجو :
طرح های تسهیلاتی مثل : سنا ، سپاس ، میثاق ، تسهیلات ارزان قیمت ، تسهیلات پایانه فروش
 انتقال وجه مثل : سحاب ، پایا ، پل ، سقف ساتنا ، کارمزد پایا ، ساعت چکاوک ، سقف خرید
 سپرده ها مثل : کوتاه مدت عادی ، کوتاه مدت امید ، بلند مدت یک ساله ، بلند مدت دو ساله ، بلند مدت سه ساله
 گواهی سپرده ها مثل : گواهی سپرده 3400 32 ، 3401 38 ، گواهی سپرده 30 درصدی ، گواهی سپرده یک ماهه ، گواهی سپرده سررسید بهمن`;

function App() {
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);

  // Create a search engine that indexes the 'title' and 'text' fields for
  // full-text search. Search results will include 'title' and 'text' (plus the
  // id field, that is always stored and returned)
  const miniSearch = new MiniSearch({
    fields: ["title", "text", "tags"],
    storeFields: ["title", "text", "bakhshname"],
    searchOptions: {
      boost: { tags: 3, title: 2, text: 1 },
      fuzzy: 0.25,
    },
  });

  // Add documents to the index
  miniSearch.addAll(DataArray);

  // Search for documents:
  let results = miniSearch.search(searchText);

  return (
    <main key="MainContainer" className="MainContainer">
      <div key="SearchBarContainer" className="SearchBarContainer">
        <p id="SearchLabel">جستجو</p>
        <input
          id="SearchInput"
          type="text"
          ref={searchInput}
          value={searchText}
          placeholder="لطفا عبارت مورد نظر خود را وارد نمایید ..."
          onChange={(event) => setSearchText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter")
              if (
                !searchInput.current?.value ||
                isBlank(searchInput.current?.value)
              )
                setSearchText("");
              else {
                setSearchText(searchInput.current?.value);
              }
          }}
        />
        {searchText ? (
          <svg
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="crossIcon"
            onClick={() => {
              setSearchText("");
            }}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        ) : null}
      </div>
      {results.length == 0 ? (
        <div id="helperDiv" key="helperDiv">
          <div id="helperText" key="helperText">
            {splitNewlines(helperText).map((line) => (
              <p>{line}</p>
            ))}
          </div>
        </div>
      ) : null}
      <div key="SearchBarSeperator" id="SearchBarSeperator" />
      <div key="ResultContainer" className="ResultContainer">
        {results.map(
          (result) =>
            result.score > 1 && (
              <div key={"ResultItem" + result.id} className="ResultItem">
                <h4 className="resultTitle">{result.title}</h4>
                <p className="resultText">
                  {summarize(result.text, 256) + " ... "}
                  <Popup>{popupContent(result)}</Popup>
                </p>
                <div
                  key={"ResultItemSeperator" + result.id}
                  className="ResultItemSeperator"
                />
              </div>
            )
        )}
      </div>
    </main>
  );
}

export default App;
