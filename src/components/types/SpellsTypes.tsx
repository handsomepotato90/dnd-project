interface ComponentDetails {
  m: string[];
  s: boolean;
  v: boolean;
}

interface DurationDetail {
  type: string;
  concentration:boolean;
  duration: {
      amount: number;
      type: string;
  };
}

interface TimeDetail {
  number: number;
  unit: string;
}

export default interface Spell {
  _id: string;
  name: string;
  source: string;
  page: number;
  level: number;
  school: string;
  range: {
      type: string;
  };
  components: ComponentDetails;
  classes: string[];
  conditionInflict: string[];
  damageInflict: string[];
  duration: DurationDetail[];
  savingThrow: string[];
  text: string[];
  textHighLevel: string[];
  time: TimeDetail[];
}
