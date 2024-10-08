import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopedia",
  description: "Discover the best prompts for your next writing session",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <div className="app">
            <Nav />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
