import { validateEmailAddress } from './validity'
import firstNamesList from "./../data/firstname.json"
import lastNamesList from "./../data/lastname.json"
import domainsList from "./../data/domains.json"

export const getRandom = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const getRandomItemFromList = (list: string[]) => {
  try {
    return list[getRandom(0, list.length - 1)]
  } catch (err) {
    return err
  }
}

export const getRandomEmailAddress = () => {
  try {
    let randomEmail = null
    randomEmail = `${getRandomItemFromList(firstNamesList)}.${getRandomItemFromList(lastNamesList)}@${getRandomItemFromList(domainsList)}`
    if (validateEmailAddress(randomEmail)) {
      return randomEmail
    } else {
      throw `Process produced an invalid email address (${randomEmail})`
    }
  } catch (err) {
    return err
  }
}