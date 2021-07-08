import NextError from "next/error";

const ErrorPage = ({ statusCode }) => {
  return <NextError statusCode={statusCode} />;
};

ErrorPage.getInitialProps = async ({
  res,
  err,
  asPath,
  pathname,
  query,
  AppTree,
}) => {
  const errorInitialProps = await NextError.getInitialProps({
    AppTree,
    err,
    pathname,
    query,
    res,
  });

  errorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return { statusCode: 404 };
  }
  if (err) {
    return errorInitialProps;
  }

  return errorInitialProps;
};

export default ErrorPage;
