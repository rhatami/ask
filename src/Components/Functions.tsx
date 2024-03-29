import "./Popup.css";
import { SearchResult } from "minisearch";

export function isBlank(str: string) {
  return !str || /^\s*$/.test(str);
}

// export function stripHTML(html: string) {
//   let tmp = document.createElement("DIV");
//   tmp.innerHTML = html;
//   return tmp.textContent || tmp.innerText || "";
// }

// export function stripHTML2(html: string) {
//   return html.replace(/<[^>]*>?/gm, "");
// }

export function summarize(text: string, size: number) {
  size = size - 1; // 0 index
  if (text.length <= size) return text;
  return text.slice(0, size);
}

export function splitNewlines(txt: string) {
  return txt.split("\n");
}

export function popupContent(data: SearchResult) {
  return (
    <div className="PopoupContainer" id={"PopoupContainer" + data.id}>
      <h4 className="PopupTitle">{data.title}</h4>
      <div className="PopupBody" key={"PopupBody" + data.id}>
        {splitNewlines(data.text).map((line) => (
          <p>{line}</p>
        ))}
      </div>
      {data.bakhshname ? (
        <p className="PopupBakshname">{data.bakhshname}</p>
      ) : null}
    </div>
  );
}
