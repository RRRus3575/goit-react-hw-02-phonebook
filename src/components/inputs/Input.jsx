import css from './Input.module.css';

export const Input = ({ label, name, value, pattern, type, onChange }) => {
  return (
    <label className={css.label}>
      {label}
      <input
        className={css.input}
        onChange={onChange}
        name={name}
        value={value}
        // pattern={pattern}
        type={type}
        required
      />
    </label>
  );
};
