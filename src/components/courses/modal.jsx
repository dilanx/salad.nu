import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedSection,
  clearSelectedSection,
} from "./../../store/slices/search";
import { getSection } from "./../../store/slices/sections";
import { getName } from "../../utils/courseUtils";
import ModalBody from "./modalBody";

Modal.setAppElement(document.getElementById("root"));

const style = {
  content: {
    top: "20%",
    left: "20%",
    transform: "translate(-10%, -10%)",
    borderRadius: "1rem",
    border: "0.5rem solid purple",
  },

  overlay: {
    zIndex: "3",
  },
};

const CourseModal = () => {
  const dispatch = useDispatch();

  const { id } = useSelector(getSelectedSection);
  const section = useSelector(getSection(id));
  let name = "";
  let isOpen = false;
  if (section) {
    name = getName(section);
    isOpen = true;
  }

  const handleExit = () => {
    dispatch(clearSelectedSection());
  };

  return (
    <Modal style={style} isOpen={isOpen}>
      {section && <ModalBody name={name} {...section} />}
      <div>
        <button className="btn btn-outline-secondary" onClick={handleExit}>
          Exit
        </button>
      </div>
    </Modal>
  );
};

export default CourseModal;
