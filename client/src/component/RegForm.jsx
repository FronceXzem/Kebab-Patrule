<form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
<label >
  Email 
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  ></input>
</label>
<label >
  Пароль 
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  ></input>
</label>
<label >
  Повторите пароль 
  <input
    type="password"
    value={rpassword}
    onChange={(e) => setRpassword(e.target.value)}
  ></input>
</label>
<PasswordChecklist
  rules={["minLength", "number", "match"]}
  minLength={5}
  value={password}
  valueAgain={rpassword}
/>
<label >
  Имя 
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  ></input>
</label>
<select
  name="status"
  value={status}
  onChange={(e) => setStatus(e.target.value)}
>
  <option>Статус</option>
  <option>Курьер</option>
  <option>Покупатель</option>
</select>

<button type="submit">Регистрация</button>
</form>