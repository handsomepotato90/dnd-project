import { useState, useEffect } from "react";
import useWindowSize from "../../../hooks/screensize-hook";

export default function CalendarReSize() {
  const size = useWindowSize();
  const [calendarSize, setCalendarsize] = useState(480);
  useEffect(() => {
    if (size.width > 1920) {
      setCalendarsize(540);
    }
    if (size.width > 1024 && size.width < 1920) {
      setCalendarsize(480);
    }
    if (size.width < 1024 && size.width > 420) {
      setCalendarsize(390);
    }
    if (size.width < 420) {
      setCalendarsize(330);
    }
  }, [size.width]);
  return calendarSize;
}
