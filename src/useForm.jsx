export function useForm(initialValues = { username: '', password: '' }){
    const [values, setValues] = useState(initialValues)

  function handleChange(e){
    const { name, value } = e.target
    setValues((prevValues) => ({ ...prevValues, [name]: value }))
  };

  return { values, handleChange }
}

