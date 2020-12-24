import Link from "next/link";
const Error = ({ statusCode }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h4>
        {statusCode
          ? `دست و پای بچه ها گیر کرده به سیم ${statusCode}`
          : "خودت باعث ایجاد ارور شدی "}
      </h4>
      <Link href="/">
        <a className="btn btn-danger mt-5 mb-5"> منو ببر به خونه </a>
      </Link>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
export default Error;
