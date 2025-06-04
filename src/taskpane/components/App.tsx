import * as React from "react";
import Header from "./Header";

import HeroList, { HeroListItem } from "./HeroList";
import TextInsertion from "./TextInsertion";
import { makeStyles , Button ,Persona, TabList, Tab} from "@fluentui/react-components";
import { Ribbon24Regular, LockOpen24Regular, DesignIdeas24Regular } from "@fluentui/react-icons";
import { insertText } from "../taskpane";
import {
  bundleIcon,
  CalendarMonthFilled,
  CalendarMonthRegular,
} from "@fluentui/react-icons";
import { useState } from "react";
import Enterance from "./Enterance";


const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);

interface AppProps {
  title: string;

}

const useStyles = makeStyles({

   wrapper: {
    columnGap: "15px",
    display: "flex",
  },

  root: {
    
    padding: "25px",
    paddingTop: "10px"
  },
});






const App = (props:AppProps) => {
  const styles = useStyles();
  // The list items are static and won't change at runtime,
  // so this should be an ordinary const, not a part of state.


  //Destructuring
  const { title } = props;

   const [fieldValue, setFieldValue] = useState<string>('');
 // ta funkcja będzie przekazywana do XYZ




  const listItems: HeroListItem[] = [
    {
      icon: <Ribbon24Regular />,
      primaryText: "Achieve more with Office integration",
    },
    {
      icon: <LockOpen24Regular />,
      primaryText: "Unlock features and functionality",
    },
    {
      icon: <DesignIdeas24Regular />,
      primaryText: "Create and visualize like a pro",
    },
  ];


  
  return (
    <div className={styles.root}>


   <TabList style={{marginBottom:"15px", marginLeft:"-13px"}} size="medium" defaultSelectedValue="tab1">
        <Tab value="tab1" icon={<CalendarMonth />}>Entry 1</Tab>
        <Tab value="tab2" disabled={true}>Entry 2</Tab> 
     
      </TabList>
     
      <Enterance />
     
    </div>
  );
};

export default App;
