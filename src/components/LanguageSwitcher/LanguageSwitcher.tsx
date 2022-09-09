// import { useTranslation } from "react-i18next";

import {useState} from "react";

const LanguageSwitcher = () => {
  // const { i18n } = useTranslation();
  // const [currentLang, setCurrentLang] = useState([]);

  const changeLanguage = (event: any) => console.log(event.target.value);

  const options = [
    {
      label: 'CZ',
      value: 'cs'
    },
    {
      label: 'EN',
      value: 'en'
    }
  ]

  return (
    <select onChange={changeLanguage}>
      {options.map((option, index) => (
        <option value={option.value} key={`lang-${index}`}>{option.label}</option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;
