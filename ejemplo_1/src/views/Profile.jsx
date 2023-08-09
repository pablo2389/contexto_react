import styles from "./Profile.module.css";

import {
  FormInput,
  RequiredFormInput,
} from "../components/FormInputs/FormInputs";

const Profile = (props) => {
  // Desestructuramos los props:
  const { userName } = props;

  return (
    <div className={styles.formsContainer}>
      <div className={styles.userProfileContainer}>
        <div className={styles.initialMessage}>
          <h1>Perfil de usuario</h1>
        </div>
        <form
          className={[styles.userProfileForm, styles.formCommon].join(" ")}
        >
          {FormInput("Nombre", "text", userName, 'username')}
          {RequiredFormInput("**Email", "email", "", 'email')}
        </form>
      </div>
    </div>
  );
};
export default Profile;
