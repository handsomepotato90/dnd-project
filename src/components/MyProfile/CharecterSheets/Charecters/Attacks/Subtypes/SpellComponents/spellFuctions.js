import styles from "./SpellComponents.module.css";
export function replaceDiceNotation(text) {
  // Replace {@dice #d#} with just #d#
  text = text.replace(/{@dice (\d+d\d+)}/g, "$1");
  // Replace {@dice d#} with just d#
  text = text.replace(/{@dice (d\d+)}/g, "$1");

  // Replace {@damage #d#} with just #d#
  text = text.replace(/{@damage (\d+d\d+)}/g, "$1");
  // Replace {@damage d#} with just d#
  text = text.replace(/{@damage (d\d+)}/g, "$1");
  text = text.replace(/{@skill (\w+)}/g, "$1");
  return text;
}
export function formatAsParagraphs(array) {
  return array
    .map((item) => {
      if (typeof item === "string") {
        return `<p>${replaceDiceNotation(item)}</p>`;
      } else if (item.type === "list") {
        const listItems = item.items
          .map(
            (listItem) =>
              `<li class=${styles.list_items_style}>${listItem}</li>`
          )
          .join("");
        return `<ul >${replaceDiceNotation(listItems)}</ul>`;
      } else {
        return "";
      }
    })
    .join("");
}
export function getAllEntries(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.reduce((entries, item) => {
    if (item.type === "entries" && Array.isArray(item.entries)) {
      entries = entries.concat(item.entries);
    } else if (item.entries) {
      entries = entries.concat(getAllEntries(item.entries));
    }

    return entries;
  }, []);
}
