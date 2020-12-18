function Api({ data }) {
  console.log(data);
  return <>{data}</>;
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/rishabh-live/`);
  const data = await res.json();
  console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}
export default Api;
