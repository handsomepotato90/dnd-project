import React from "react";
import styles from "./SpellComponents.module.css";

export function replaceDiceNotation(text: string): string {
  // Replace {@dice #d#} with just #d#
  text = text.replace(/{@dice (\d+d\d+)}/g, "$1");
  // Replace {@dice d#} with just d#
  text = text.replace(/{@dice (d\d+)}/g, "$1");

  // Replace {@damage #d#} with just #d#
  text = text.replace(/{@damage (\d+d\d+)}/g, "$1");
  // Replace {@damage d#} with just d#
  text = text.replace(/{@damage (d\d+)}/g, "$1");

  // Replace {@skill word} with just word
  text = text.replace(/{@skill (\w+)}/g, "$1");
  return text;
}

interface ListItem {
  type: "list";
  items: string[];
}

interface EntryItem {
  type: "entries";
  entries: (string | ListItem | EntryItem)[];
}

type FormatAsParagraphsInput = (string | ListItem | EntryItem)[];

export function formatAsParagraphs(array: FormatAsParagraphsInput): string {
  return array
    .map((item) => {
      if (typeof item === "string") {
        return `<p>${replaceDiceNotation(item)}</p>`;
      } else if (item.type === "list") {
        const listItems = item.items
          .map((listItem) => `<li class=${styles.list_items_style}>${listItem}</li>`)
          .join("");
        return `<ul>${replaceDiceNotation(listItems)}</ul>`;
      } else if (item.type === "entries") {
        return formatAsParagraphs(item.entries);
      } else {
        return "";
      }
    })
    .join("");
}

export function getAllEntries(data: (string | ListItem | EntryItem)[]): (string | ListItem)[] {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.reduce<(string | ListItem)[]>((entries, item) => {
    if (typeof item === "string") {
      entries.push(item);
    } else if (item.type === "entries" && Array.isArray(item.entries)) {
      entries = entries.concat(getAllEntries(item.entries));
    } else if (item.type === "list") {
      entries.push(item);
    }
    return entries;
  }, []);
}
