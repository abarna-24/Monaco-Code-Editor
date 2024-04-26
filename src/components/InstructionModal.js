import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";

const InstructionModal = ({ isOpen, onRequestClose, onContinueCoding }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "53%",
          height: "80%",
          margin: "auto",
          border: "none",
          borderRadius: "20px",
          padding: "40px",
          backgroundColor: "#fff",
          zIndex: 200,
        },
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Compiler Instructions</h2>
        <div className="flex items-center">
        <button onClick={onRequestClose} className="text-gray-500">
          <AiOutlineClose size={24} />
        </button>
      </div></div>

      {/* Your instruction content goes here */}
      <div className="flex items-center mb-2">
        <BsInfoCircle size={20} className="mr-2" />
        <p className="text-b">
          Follow the instructions below to run and compile:
        </p>
      </div><br></br>
      <div>
        <b>Navigating Your Test:</b>
        <ul className="list-disc pl-6">
        <li>You can see the "Time available to complete" in the "Countdown timer" at the top right of the test screen at all times.</li>
        <li>If sectional lock is enabled you will see another timer at section tab which is a countdown timer for that section.</li>
        <li>You can "Bookmark" your answer for later review by clicking on the flag icon (  ) in the test screen.</li>
        <li>All answers will be "Saved automatically."</li>
        </ul><br></br>
      </div>
      <div>
        <b>Instructions for Coding Section:</b>
        <ul className="list-disc pl-6">
        <li>Click the "Submit Code" button to submit your code for evaluation. Else the code will not be submitted.</li>
        <li>You will lose the code you have typed if you change the coding language.</li></ul><br></br>
      </div>
      <div>
        <b>Submitting Your Exam:</b>
        <ul className="list-disc pl-6">
            <li>To end the test, click the "End Test" button and confirm by typing "END" in the prompt box.</li>
            <li>Test will be submitted automatically if the allotted time expires.</li>
        </ul><br></br>
      </div>
      <div>
        <b>Caution:</b>
        <ul className="list-disc pl-6">
            <li>"Do not refresh the page or click the browser back button" when test is in progress. You may lose all data.</li>
            <li>In case you have an Internet or power outage, you would need to log in again to access your exam. Test will resume from the last save point.</li>
        </ul><br></br>
      </div>
      <div>
      <button onClick={onContinueCoding} className="text-blue-500 cursor-pointer absolute bottom-0 right-0 mb-10 mr-10 border border-blue-500 rounded p-3">
            Continue Coding
          </button>
      </div>

    </Modal>
  );
};

export default InstructionModal;
