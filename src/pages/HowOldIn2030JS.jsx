import { useState } from "react";

const howOldIn2030 = (ageToCheck) => {
  console.log(
    `In 2030 you will be ${ageToCheck + (2030 - new Date().getFullYear())}`
  );
};

const HowOldIn2030JS = () => {
  const [age, setAge] = useState(0);
  return (
    <form>
      <label htmlFor="age">Please enter your age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={(ev) => setAge(ev.target.value)}
      />
      <button
        onClick={(ev) => {
          ev.preventDefault();
          howOldIn2030(age);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default HowOldIn2030JS;
