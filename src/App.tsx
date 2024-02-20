import "./App.css";
import { useRef, useState } from "react";
import MiniSearch from "minisearch";
import { Data } from "./Data";

function isBlank(str: string) {
  return !str || /^\s*$/.test(str);
}

function stripHTML(html: string) {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

function stripHTML2(html: string) {
  return html.replace(/<[^>]*>?/gm, "");
}

function summarize(text: string, size: number) {
  size = size - 1; // 0 index
  if (text.length <= size) return text;
  return text.slice(0, size);
}

const placeholder =
  "مثلا : سنا ، سپاس ، میثاق ، جاری طلایی ، سحاب ، ساتنا ، پایا ، پایانه فروش ، بلندمدت یک ساله ، بلند مدت دو ساله ، بلند مدت سه ساله";

function App() {
  const [searchText, setSearchText] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);

  // Create a search engine that indexes the 'title' and 'text' fields for
  // full-text search. Search results will include 'title' and 'text' (plus the
  // id field, that is always stored and returned)
  const miniSearch = new MiniSearch({
    fields: ["title", "text", "tags"],
    storeFields: ["title", "text"],
    searchOptions: {
      boost: { tags: 3, title: 2, text: 1 },
      fuzzy: 0.25,
    },
  });

  // Add documents to the index
  miniSearch.addAll(Data);

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
          placeholder={placeholder}
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
      <div key="SearchBarSeperator" id="SearchBarSeperator" />
      <div key="ResultContainer" className="ResultContainer">
        {results.map(
          (result) =>
            result.score > 1 && (
              <div key={"ResultItem" + result.id} className="ResultItem">
                <h4 className="resultTitle">{result.title}</h4>
                <p className="resultText">
                  {summarize(result.text, 256) + " ... "}
                  <span
                    className="ShowContent"
                    onClick={() => alert(result.text)}
                  >
                    مشاهده کامل محتوا
                  </span>
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
