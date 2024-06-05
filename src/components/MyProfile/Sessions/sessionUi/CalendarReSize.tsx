import { useState, useEffect } from "react";
import useWindowSize from "../../../hooks/screensize-hook";

const CalendarReSize = () => {
  const size = useWindowSize();
  const [calendarSize, setCalendarsize] = useState<number | undefined>(480);

  useEffect(() => {
    if (size.width !== undefined) {
      if (size.width > 1920) {
        setCalendarsize(540);
      } else if (size.width > 1024 && size.width < 1920) {
        setCalendarsize(480);
      } else if (size.width < 1024 && size.width > 420) {
        setCalendarsize(390);
      } else if (size.width < 420) {
        setCalendarsize(330);
      }
    } else {
      setCalendarsize(undefined);
    }
  }, [size.width]);

  return calendarSize;
};

export default CalendarReSize;
