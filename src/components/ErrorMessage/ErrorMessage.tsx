import style from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return <p className={style.ErrorMessage}>{error}</p>;
};

export default ErrorMessage;
