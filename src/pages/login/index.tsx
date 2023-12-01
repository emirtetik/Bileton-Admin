import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { setCurrentLogin } from "../../store/auth/actions";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

const Alert = styled(MuiAlert)(({ theme }) => ({
  "& .MuiAlert-icon": {
    marginRight: theme.spacing(1),
  },
  "&.MuiAlert-standardError": {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
  },
  "&.MuiAlert-standardSuccess": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
  },
}));

const Login = () => {
  const [isErrorSnackbarOpen, setIsErrorSnackbarOpen] = React.useState(false);
  const [isSuccessSnackbarOpen, setIsSuccessSnackbarOpen] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const redirectToAdminPanel = () => {
   setTimeout(() => {
    navigate("/home");
   },2000)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "neya@hotmail.com" && password === "admin123") {
      setCurrentLogin(true);
      setSuccessMessage(
        "Giriş başarılı! Admin paneline yönlendiriliyorsunuz..."
      );
      setIsSuccessSnackbarOpen(true);
      redirectToAdminPanel();
    } else {
      setErrorMessage("hatalı e-mail veya şifre");
      setIsErrorSnackbarOpen(true);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Typography component="h1" variant="h5">
            <h6 className="font-bold text-gray-700 text-subtitle font-raleway">
             Bileton Admin Giriş
            </h6>
          </Typography>
          <Box
            className="flex flex-col w-2/3 gap-3 sm:w-1/3"
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-md "
              size="medium"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#454545",
                  },
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black",
                },
              }}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white rounded-md"
              size="medium"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#454545",
                  },
                },
              }}
              InputLabelProps={{
                style: {
                  color: "black",
                },
              }}
            />

            <Button
              type="submit"
              size="medium"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Giriş yap
            </Button>
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={isErrorSnackbarOpen}
        autoHideDuration={5000}
        onClose={() => setIsErrorSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert variant="filled" severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={isSuccessSnackbarOpen}
        autoHideDuration={5000}
        onClose={() => setIsSuccessSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert variant="filled" severity="success">
          {successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Login;
