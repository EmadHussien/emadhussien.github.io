import React, { useState } from "react";
import Terminal, {
  ColorMode,
  TerminalOutput,
  TerminalInput,
} from "react-terminal-ui";

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key={0}>
      Welcome to Emad's website. As you can see, you can use the terminal.
      <br />
      <br />
      Have fun, and don't hesitate to use 'help' if you need it!
    </TerminalOutput>,
  ]);

  const handleTerminalInput = (terminalInput) => {
    let newLineData = [...terminalLineData];
    newLineData.push(<TerminalInput>{terminalInput}</TerminalInput>);
    switch (terminalInput.trim().toLowerCase()) {
      case "help":
        newLineData.push(
          <TerminalOutput>
            Available commands are email,cv, github, linkedin, clear' will clear
            the terminal.
          </TerminalOutput>
        );
        break;
      case "cv":
        newLineData.push(
          <TerminalOutput>
            <a
              style={{ color: "white", fontSize: "15px" }}
              href="https://emadhussien.github.io/mycv/Emad_Hussien_Software_Engineer_Resume.pdf"
              target="_blank"
            >
              https://emadCv.com
            </a>
          </TerminalOutput>
        );
        break;
      case "github":
        newLineData.push(
          <TerminalOutput>
            <a
              style={{ color: "white", fontSize: "15px" }}
              href="https://github.com/EmadHussien"
              target="_blank"
            >
              https://github.com/EmadHussien
            </a>
          </TerminalOutput>
        );
        break;

      case "linkedin":
        newLineData.push(
          <TerminalOutput>
            <a
              style={{ color: "white", fontSize: "15px" }}
              href="https://www.linkedin.com/in/emadhussien98"
              target="_blank"
            >
              https://www.linkedin.com/in/emadhussien98
            </a>
          </TerminalOutput>
        );
        break;
      case "email":
        newLineData.push(
          <TerminalOutput>
            <a
              style={{ color: "white", fontSize: "15px" }}
              href="mailto:emadhussien.fcis@gmail.com"
            >
              emadhussien.fcis@gmail.com
            </a>
          </TerminalOutput>
        );
        break;
      case "clear":
        newLineData = [];
        break;
      default:
        newLineData.push(
          <TerminalOutput>
            Unknown command. Type 'help' for available commands.
          </TerminalOutput>
        );
    }
    setTerminalLineData(newLineData);
  };

  return (
    <div className="container" style={{ height: "100%" }}>
      <Terminal
        height="100vh"
        colorMode={ColorMode.Dark}
        onInput={handleTerminalInput}
        prompt=">"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
