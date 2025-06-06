import * as React from "react";
import { useState } from "react";
import { Button, Field, Textarea, Spinner, tokens, makeStyles } from "@fluentui/react-components";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { Play24Regular, CheckmarkCircle24Regular } from '@fluentui/react-icons';



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

  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);



  const PressButton = async () => {
    await props.insertText(text);

    setIsLoading(true);
    setIsComplete(false);
    setProgress(0);


     // Progress animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / 60); // 60 updates over 6 seconds
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 100);


  // Complete after 6 seconds
    setTimeout(() => {
      setIsLoading(false);
      setIsComplete(true);
      setTimeout(() => setIsComplete(false), 3000); // Hide success message after 3 seconds
    }, 6000);




  };

  const handleTextChange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);

   
  };

  const styles = useStyles();

  return (
    
    <div className={styles.textPromptAndInsertion}>
     
     
     <div className={styles.buttonContainer}>
      <Button 
      appearance="primary" 
       disabled={isLoading}
       size="small" 
      icon={isLoading ? <Spinner size="tiny" /> : <Play24Regular />}
      onClick={PressButton}  >
         {isLoading ? 'Processing...' : 'Start Process'}
      </Button>
      </div>
    </div>

  );
};

export default TextInsertion;
