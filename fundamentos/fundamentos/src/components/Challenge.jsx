const Challenge = () => {
    const a = 10;
    const b = 4;
  return (
    <>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a + b)}>Somar</button>
    </>
  )
}

export default Challenge