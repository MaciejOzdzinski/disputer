import React,  { useState, useEffect } from 'react';
import {
  Field,
  InfoLabel,
  Combobox,
  Option,
  useId,
  makeStyles,
   Radio, RadioGroup, Textarea,Button, tokens

} from '@fluentui/react-components';
import { DatePicker } from "@fluentui/react-datepicker-compat";




//Zmienne
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

const actions = ['Action 1', 'Action 2', 'Action 3', 'Action 4', 'Action 5'];




//Klasa Handler
interface TaskType {
  id: number;
  value: string;
}
interface Responsible {
  id: number;
  value: string;
}
interface LoadSet {
  taskTypes: TaskType[];
  responsibles: Responsible[];
}



//Konstruktor - Start
export const Enterance: React.FC = () => {
  const comboId = useId('combobox');
  const handlerId = useId('combobox-handlers');


  const [taskTypes, setTaskTypes] = useState<TaskType[]>([]); 
  const [responsibles, setResponsibles] = useState<Responsible[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const url =
      "https://adstnt-ghbuchbaebgca4et.westeurope-01.azurewebsites.net/api/taskmanagement/getttasksandresponsible";

    async function fetchLoadSet() {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
          'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`Network response was not ok (status ${response.status})`);
        }
        const data: LoadSet = await response.json();
        setTaskTypes(data.taskTypes);
        setResponsibles(data.responsibles);
      } catch (err: any) {
        console.error('Fetch loadset failed:', err);
        setError(err.message || 'Unable to load initial data');
      } finally {
        setLoading(false);
      }
    }

    fetchLoadSet();
  }, []);

  
   const styles = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Field
        size="small"
        label={
          <InfoLabel info="Example info" size="small">
            Tasks
          </InfoLabel>
        }
         required
          validationState={error ? 'error' : 'none'}
          validationMessage={error || ''}
      >
        <Combobox
          aria-labelledby={comboId}
          placeholder="Select an action"
          size="small"
        >
          {taskTypes.map(taksType => (
            <Option key={taksType.id} >
              {taksType.value}
            </Option>
          ))}
        </Combobox>
      </Field>


      <Field
        size="small"
         label={
          <InfoLabel info="Example info" size="small">
            Handlers
          </InfoLabel>
        }
       
        required
          validationState={error ? 'error' : 'none'}
          validationMessage={error || ''}
      >

    {loading ? (
          <div>Loading handlers...</div>
 ) : (

        <Combobox
          aria-labelledby={handlerId}
          placeholder="Select a handler"
          size="small"
        >
          {responsibles.map(responsible => (
            <Option key={responsible.id}>
              {responsible.value}
            </Option>
          ))}
        </Combobox>

 )}
      </Field>



<Field label="Select a date"  size="small">
      <DatePicker
        size="small"
        allowTextInput
        placeholder="Select a date..."
        style={{maxWidth: "300px"}}
      />
    </Field>

 <Field label="Priority" required size="small">
    <RadioGroup >
      <Radio value="Hot" label="Hot"  />
      <Radio value="pear" label="Warm" />
      <Radio value="banana" label="Cold" />
      </RadioGroup>
  </Field>

 <Field  size="small" label="Enter text to be inserted into the document.">
        <Textarea size="small" style={{height:"300px"}}  resize="both" appearance="outline"  />
      </Field>


<div className={styles.buttonContainer}>
      <Button appearance="primary" disabled={false} size="small"  >
        Insert text
      </Button>
      </div>


    </div>
  );
};

export default Enterance;
