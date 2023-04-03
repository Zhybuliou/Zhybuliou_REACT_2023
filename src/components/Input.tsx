type MyPropsInput = {
  placeholder: string;
  handleChange: (value: string) => void;
  classInput: string;
  typeInput: string;
  valueInput: string;
};

export default function Input({
  valueInput,
  typeInput,
  classInput,
  placeholder,
  handleChange,
}: MyPropsInput) {
  return (
    <input
      value={valueInput}
      type={typeInput}
      className={classInput}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
