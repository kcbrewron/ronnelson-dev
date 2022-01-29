export default function Copyright() {
  const myYear = copyright();
  return (
    <>
      Ron Nelson &#169; {myYear}
    </>
  );
  function copyright() {
    let today = new Date();
    let currentYear = today.getFullYear();
    return currentYear;
  }
}
