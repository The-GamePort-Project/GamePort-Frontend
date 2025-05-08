import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <p>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
          {" | "}
          <a href="/terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
