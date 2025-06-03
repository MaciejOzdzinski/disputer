import * as React from "react";
import { useState } from "react";
import { Button, Field, Textarea, tokens, makeStyles } from "@fluentui/react-components";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";


/* global HTMLTextAreaElement */

interface TextInsertionProps {
  insertText: (text: string) => void;
}

const useStyles = makeStyles({
  instructions: {
    fontWeight: tokens.fontWeightSemibold,
    marginTop: "20px",
    marginBottom: "10px",
  },
  textPromptAndInsertion: {
    display: "flex",
    flexDirection: "column",
  
    width: "100%",
  },
  textAreaField: {
    
    marginTop: "30px",
    marginBottom: "20px",
    marginRight: "20px",
    maxWidth: "100%",
  },
   buttonc1: {
    
    width: "300px"
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-start', // lub 'center'
    padding: '16px',
  }

});

const TextInsertion = (props: TextInsertionProps) => {



  const [text, setText] = useState<string>("Some text.");



  const handleTextInsertion = async () => {
    await props.insertText(text);
  };

  const handleTextChange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const styles = useStyles();

  return (
    
    <div className={styles.textPromptAndInsertion}>
     
     
     <div className={styles.buttonContainer}>
      <Button {...props} appearance="primary" disabled={false} size="small" onClick={handleTextInsertion}  >
        Insert text
      </Button>
      </div>
    </div>

  );
};

export default TextInsertion;
