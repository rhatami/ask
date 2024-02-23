import "./App.css";
import { useRef, useState } from "react";
import MiniSearch from "minisearch";
import { DataArray } from "./Data";
import Popup from "./Components/Popup";
import { isBlank, popupContent, summarize } from "./Components/Functions";

const helperText =
  "مثلا : سنا ، سپاس ، میثاق ، جاری طلایی ، سحاب ، ساتنا ، پایا ، پایانه فروش ، بلندمدت یک ساله ، بلند مدت دو ساله ، بلند مدت سه ساله";

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
          defaultValue={searchText}
          placeholder="لطفا عبارت مورد نظر را وارد کرده و سپس کلید Enter را فشار دهید"
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
      </div>
      {results.length == 0 ? (
        <div id="helperDiv" key="helperDiv">
          <p id="helperText" key="helperText">
            {helperText}
          </p>
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