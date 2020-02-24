import { ItemList } from "../types"

// Trims spaces from list and discards empty entries
export const sanitizeTextList = (list: ItemList) => {
  return list.filter(item => item.trim().length > 0)
}
// Merges an old list with a new list
export const mergeLists = (oldList: ItemList, newList: ItemList) => oldList.concat(newList)

// Discards duplicate entries in a list
export const dedupeLists = (oldList: ItemList, newList: ItemList) => {
  return newList.filter((item, position) => {
    return !position || item != oldList[position - 1];
  });
}

// Merges and deduplicates lists
export const mergeAndDeduplicateLists = (list: ItemList) => {
  const sanitizedItems = sanitizeTextList(list)
  const dedupedItemList = dedupeLists(list, sanitizedItems)
  const mergedItemList = mergeLists(list, dedupedItemList)
  const uniqueItemList = dedupeLists(mergedItemList, dedupedItemList)
  return uniqueItemList
}