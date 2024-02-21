/* eslint-disable react/prop-types */
import "../style/Input.css";
export default function Input({
  type,
  placeholder,
  id,
  value,
  onChange,
  name,
}) {
  return (
    <div className="input-container">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={id} className="label">
        Entrer votre {name}
      </label>
      <div className="underline"></div>
    </div>
  );
}
