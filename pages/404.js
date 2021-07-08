import Head from "next/head";

const Error404 = () => (
  <>
    <Head>
      <title key="title">404: Page Not Found</title>
    </Head>

    <div className="flex n-bg-near-black" style={{ minHeight: "100vh" }}>
      <div
        className="n-mx-w588 center tc n-ph30"
        style={{ paddingTop: "calc(100px + 5vw)" }}
      >
        <div
          id="logo"
          className="center n-mb36"
          style={{ height: 75, width: 75 }}
        ></div>
        <h1 className="white fw3 n-mb48">Page Not Found</h1>
      </div>
    </div>
  </>
);

export default Error404;
