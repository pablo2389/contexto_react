import styles from "./Home.module.css";


const Home = (props) => {
  const { auth, userName } = props;

  return (
    <div className={styles.container}>
      {auth === true?
        <div>¡Bienvenido! {userName}</div>
      :
        <div>Para poder ver los posteos debe logearse</div>
      }
    </div>
  );
};
export default Home;
