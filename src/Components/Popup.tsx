import Pop from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./Popup.css";
import { PropsWithChildren } from "react";

const Popup = ({ children }: PropsWithChildren) => {
  return (
    <Pop
      key="Popup"
      trigger={<span className="ShowContent">مشاهده کامل محتوا</span>}
      className="Popup"
      position="top center"
      modal
    >
      {children}
    </Pop>
  );
};

export default Popup;
