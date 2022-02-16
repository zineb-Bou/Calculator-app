function Toggle() {
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
          <input type="radio" name="theme" id="dark" />
          <input type="radio" name="theme" id="light" />
          <input type="radio" name="theme" id="violet" />
          <span aria-hidden="true" className="wrapper"></span>
          <span aria-hidden="true" className="switcher"></span>
        </span>
      </div>
    </fieldset>
  );
}

export default Toggle;
