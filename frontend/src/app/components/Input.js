export default function Input({ label, type, state, setState, ...props }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (event.target.type === "checkbox") { 
      setState({ ...state, [name]: event.target.checked });
      return;
    }
    setState({ ...state, [name]: value });
  };
  
  return (
    <label className="flex flex-col">
      <span>{label}</span>
      <input type={type} {...props} onChange={handleChange} />
    </label>
  );
}