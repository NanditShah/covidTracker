import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../API";

function Countrypicker({ handleChange }) {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);
  console.log(fetchedCountries);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue=""  onChange={(e) => handleChange(e.target.value)}>
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option
            id={i}
            value={country}
           
          >
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default Countrypicker;
