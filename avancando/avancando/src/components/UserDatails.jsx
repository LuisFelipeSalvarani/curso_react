const UserDatails = ({name, age, job}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (<p>Habipto a tirar carteira de habilitação</p>) : (<p>Menor de idade.</p>)}
    </div>
  )
}

export default UserDatails