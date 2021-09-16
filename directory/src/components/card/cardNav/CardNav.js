import "./CardNav.css";
import { useState } from "react";
import { PopUpEdit } from "./onPopupEdit/OnPopupEdit";
import { PopUpNew } from "./PopupNew/PopUpNew";


export function CardNav(props) {
  const { dataCopy, DataSetter, IndexSetter, index, dataCopyLength } = props;
  const [popup, setpopup] = useState("");

  const onClickHandle = () => {
    IndexSetter(index + 1);
  };
  
  const emptyPopout = () => {
    setpopup("")
  }

  const popupEditSet = () => {
    setpopup(<PopUpEdit dataCopy={dataCopy} DataSetter={DataSetter} index={index} emptyPopout={emptyPopout} />)
  }

  const popupNewSet = () => {
    setpopup(<PopUpNew emptyPopout={emptyPopout} DataSetter={DataSetter} dataCopy={DataSetter} dataCopyLength={dataCopyLength}/>)
  }

  const deleteSet = () => {
    DataSetter(index)
  }




  return (
    <>
      {popup}
      <div id="nav-cardNav">
        <div className="div-cardNav">
          <button
            className="button-cardNav-next-previous"
            id="button-cardNav-previous"
            disabled={index === 1}
            onClick={() => IndexSetter(index - 1)}
          >
            {"< Previous"}
          </button>
        </div>
        <div className="div-cardNav" id="div-button-cardNav">
          <button className="button-cardNav" onClick={() => popupEditSet()}>
            Edit
          </button>
          <button className="button-cardNav" id="button-cardNav-delete" onClick={() => deleteSet()}>
            Delete
          </button>
          <button className="button-cardNav" onClick={() => popupNewSet()}>New</button>
        </div>
        <div className="div-cardNav">
          <button
            className="button-cardNav-next-previous"
            id="button-cardNav-next"
            disabled={index === dataCopy.length}
            onClick={() => onClickHandle()}
          >
            {"Next >"}
          </button>
        </div>
      </div>
    </>
  );
}
