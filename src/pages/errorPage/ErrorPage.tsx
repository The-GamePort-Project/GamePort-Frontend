import styles from "./errorPage.module.scss";
function ErrorPage() {
  return (
    <div className={styles.errorPageContainer}>
      <h1>404</h1>
      <h2>Page not found</h2>
    </div>
  );
}

export default ErrorPage;
