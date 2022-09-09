import axios from "axios";

export const fetchWord = async (word: string) => {
  await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
}
