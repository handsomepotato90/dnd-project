import { useState, useContext, useEffect } from "react";
import CS from "../../../../../../store/CS-context";
import DiceHeal from "./DiceHeal";

export default function HitDieHolder() {
  const [arrayOfClassHitDie, setArrayOfClassHitDie] = useState([]);
  const cs = useContext(CS);
  useEffect(() => {
    setArrayOfClassHitDie(cs.classes);
  }, [cs.classes]);

  return (
    <div>
      {arrayOfClassHitDie.map((e, i) => {
        return <DiceHeal key={i} dieArray={e}></DiceHeal>
      })}
    </div>
  );
}
