export default function Delete(props) {
  const deleteThis = () => {
    console.log(props.id);
  };

  return <button onClick={deleteThis}>Delete</button>;
}
