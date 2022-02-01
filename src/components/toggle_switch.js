import * as React from 'react';
import toggle from '../../styles/Toggle.module.scss';

function Toggle() {
  return (
    <fieldset
      className={toggle.fieldset}
      aria-label="theme switcher"
      role="radiogroup"
    >
      <h3 className={toggle.legend}>Theme</h3>
      <div className={toggle.buttons}>
        <span className={toggle.labels}>
          <label htmlFor="dark">1</label>
          <label htmlFor="light">2</label>
          <label htmlFor="violet">3</label>
        </span>
        <span className={toggle.inputs}>
          <input type="radio" name="theme" id="dark" checked />
          <input type="radio" name="theme" id="light" />
          <input type="radio" name="theme" id="violet" />
          <span aria-hidden="true" className={toggle.background}></span>
          <span aria-hidden="true" className={toggle.switcher}></span>
        </span>
      </div>
    </fieldset>
  );
}

export default Toggle;
