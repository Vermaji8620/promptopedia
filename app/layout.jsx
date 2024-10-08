import "@styles/globals.css";

export const metadata = {
  title: "Promptopedia",
  description: "Discover the best prompts for your next writing session",
};

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
