export function stripHtml(html: string): string {
  let tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export interface Trait {
  trait: string;
  text: string;
}

export const workebleObject = (props: string): Trait[] => {
  const taits: string[] = [...props.split("</p>")];
  const traits: Trait[] = [];
  for (let index = 0; index < taits.length; index++) {
    traits.push({
      trait: `${taits[index].slice(0, taits[index].indexOf("."))}`,
      text: `${taits[index].slice(taits[index].indexOf(".") + 1)}`,
    });
  }
  return traits;
};

export const getLargestKeyByValueLessThanOrEqualTo = (object: { [key: number]: number }, value: number): number | null => {
  let maxKey: number | null = null;
  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key] <= value) {
      if (maxKey === null || object[key] > object[maxKey]) {
        maxKey = Number(key);
      }
    }
  }
  return maxKey;
};

export function getSmallestKeyByValueGreaterThan(object: { [key: number]: number }, value: number): number | null {
  let minKey: number | null = null;
  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key] > value) {
      if (minKey === null || object[key] < object[minKey]) {
        minKey = Number(key);
      }
    }
  }
  return minKey;
}
