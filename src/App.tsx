import "./App.css";
import { useRef, useState } from "react";
import MiniSearch, { Suggestion } from "minisearch";
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

function App() {
  const [searchText, setSearchText] = useState("");
  const [autoComplete, setAutoComplete] = useState<Suggestion[]>([]);
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

  const searchAutoHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAutoComplete(
      miniSearch.autoSuggest(event.target.value, {
        boost: { title: 5, tags: 3, text: 1 },
        fuzzy: 0.15,
      })
    );
  };

  return (
    <div key="SearchBarFlex" className="SearchBarFlex">
      <p id="SearchLabel">جستجو : </p>
      <input
        id="SearchInput"
        type="text"
        ref={searchInput}
        defaultValue={searchText}
        placeholder="مثلا : سنا ، سپاس ، میثاق ، جاری طلایی ، سحاب ، ساتنا ، پایا ، پایانه فروش ، بلندمدت یک ساله ، بلند مدت دو ساله ، بلند مدت سه ساله"
        onKeyDown={(event) => {
          if (event.key === "Enter")
            if (
              !searchInput.current?.value ||
              isBlank(searchInput.current?.value)
            )
              setSearchText("");
            else {
              setSearchText(searchInput.current?.value);
              setAutoComplete([]);
            }
        }}
        onChange={(event) => searchAutoHandle(event)}
      />
      <div
        key="AutoCompleteFlex"
        className="AutoCompleteFlex"
        // display={autoComplete.length == 0 ? "none" : "inline-flex"}
      >
        {autoComplete.map((item) => (
          <span>{item.suggestion}</span>
        ))}
      </div>
      <div key="ResultGrid" className="ResultGrid">
        {results.map(
          (result) =>
            result.score > 1 && (
              <div
                key={"ResultItemCard" + result.id}
                className="Card ResultItemCard"
              >
                <h4 className="resultTitle">{result.title}</h4>
                <textarea cols={50} rows={5} className="resultText" disabled>
                  {result.text}
                </textarea>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
