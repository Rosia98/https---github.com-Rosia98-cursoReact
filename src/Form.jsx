export function Form(){
    const { values, handleChange } = useForm({ username: '', password: '' })

    return (
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
  
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
  
        <p>Username: {values.username}</p>
        <p>Password: {values.password}</p>
      </div>
    )

}