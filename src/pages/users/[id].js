import { useRouter } from "next/router";
import styles from "../../styles/User.module.scss";
import MainContainer from "@/components/MainContainer";

export default function ({ user }) {
  const { query } = useRouter();
  //   console.log(router);

  return (
    <MainContainer keywords={", " + user.name}>
      <div className={styles.user}>
        <h1>User with id {query.id}</h1>
        <div>Username — {user.name}</div>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  // console.log(context);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return { props: { user } };
}
