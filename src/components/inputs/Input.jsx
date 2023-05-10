export const Input = ({ label, name, value, pattern, type, onChange }) => {
  return (
    <label>
      {label}
      <input
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
