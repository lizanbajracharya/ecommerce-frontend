import "./App.css";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRoute from "./router/AppRoute";
import { theme } from "./theme";
import UserRoute from "./router/UserRoute";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="colored"
        draggable
        pauseOnHover
      />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {loginInfo?.isAdmin ? <AppRoute /> : <UserRoute />}
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
