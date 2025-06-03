import * as React from "react";
import { insertText } from "../taskpane";
import { Button, Field, Input, FieldProps , Textarea, tokens, makeStyles } from "@fluentui/react-components";
import { LabelProps } from "@fluentui/react-components";
import { InfoLabel } from "@fluentui/react-components";

import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
  Whiteboard16Filled,
} from "@fluentui/react-icons";

import {
  Combobox,
  Option,
  useId,
} from "@fluentui/react-components";
import type { ComboboxProps } from "@fluentui/react-components";


import { Persona } from "@fluentui/react-components";
import type { PersonaProps } from "@fluentui/react-components";


const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);




export interface HeaderProps {
  title: string;
  logo: string;
  message: string;
  fieldValue: string;
  onChange: (v: string) => void;
}

const useStyles = makeStyles({

   wrapper: {
    columnGap: "15px",
    display: "flex",
   justifyContent: "center",
    flexDirection : "row"
  },


    
   alignleft: {
    
    display: "flex",
     justifyContent: "flex-end",
    flexDirection : "row"
    
  },


  welcome__header: {
    display: "flex",
    alignitems: "center",
    flexDirection : "column",
    justifyContent: "center",
    gap: "15px",
    padding: "15px",
   
   
    
  },
  message: {
    fontSize: tokens.fontSizeHero900,
    fontWeight: tokens.fontWeightRegular,
    fontColor: tokens.colorBrandBackground4Static
  },
});

const Header = (props: HeaderProps) => {

  //Destructuring
  const { title, logo, message , fieldValue,  onChange} = props;
  
  const styles = useStyles();


  const comboId = useId("combo-default");
  const options = ["Cat", "Dog", "Ferret", "Fish", "Hamster", "Snake"];

  return (

   
 <div>
         
 <div className={styles.alignleft}>
<div></div>
 <Persona
         

   
        textAlignment="start"
        name="Kevin Sturgis"
        presence={{ status: "available" }}
        secondaryText="Available"
        tertiaryText="Software Engineer"
        quaternaryText="Microsoft"
      />



 </div>

 
  <div className={styles.welcome__header}>
   <Field size="small"
   
    label={
    <InfoLabel info="Example info" size="small">
      Field with an info button.
    </InfoLabel>
  }
   
    required
    validationState="success"
    validationMessage="This is a success message."
    
  >
    <Input value={fieldValue}  onChange={e => onChange(e.currentTarget.value)} size="small" />
  </Field>


 <Field size="small"
   
    label={
    <InfoLabel info="Example info" size="small">
      Pets
    </InfoLabel>
  }
   
    required
    validationState="success"
    validationMessage="This is a success message."
    
  >
      <Combobox
        aria-labelledby={comboId}
        placeholder="Select an animal"
        size="small"
       
      >
        {options.map((option) => (
          <Option key={option} disabled={option === "Ferret"}  >
            {option}
          </Option>
        ))}
      </Combobox>
      </Field>

  </div>    

</div>






    

  );
};

export default Header;
