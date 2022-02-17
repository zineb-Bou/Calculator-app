import { useState } from 'react';
function Toggle(props) {
  const [theme, setTheme] = useState('dark');
  const handleChange = (event) => {
    setTheme(event.target.value);
    props.handleChange(event.target.value);
  };
  return (
    <fieldset
      className="fieldset"
      aria-label="theme switcher"
      role="radiogroup"
    >
      <h3 className="button_name">Theme</h3>
      <div className="buttons">
        <span className="labels">
          <label htmlFor="dark">1</label>
          <label htmlFor="light">2</label>
          <label htmlFor="violet">3</label>
        </span>
        <span className="inputs">
          <input
            type="radio"
            id="dark"
            value="dark"
            checked={theme === 'dark'}
            onChange={handleChange}
          />
          <input
            type="radio"
            id="light"
            value="light"
            checked={theme === 'light'}
            onChange={handleChange}
          />
          <input
            type="radio"
            id="violet"
            value="violet"
            checked={theme === 'violet'}
            onChange={handleChange}
          />
          <span aria-hidden="true" className="wrapper"></span>
          <span aria-hidden="true" className="switcher"></span>
        </span>
      </div>
    </fieldset>
  );
}

export default Toggle;
