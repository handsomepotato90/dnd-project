import {useState} from "react"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Sessions() {
  const [value, onChange] = useState(new Date());
    console.log(value)
  return <Calendar selectRange={true} returnValue='range'  calendarType	='gregory' onChange={onChange} value={value} />;
}
