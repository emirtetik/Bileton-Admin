import Button from "@mui/material/Button";
import { ButtonProps } from "@mui/material";

interface MuiButtonProps extends Omit<ButtonProps, "variant"> {
  variant: "text" | "contained" | "outlined";
  size: "small" | "large" | "medium";
}

const MuiButton: React.FC<MuiButtonProps> = ({
  className,
  size,
  variant,
  children,
  ...props
}) => {

  let sx;

  switch (variant) {
    case "text":
      sx = {
        px: 2,
        py: 1,
        color: "#454545",
        backgroundColor: "#FFA559",
        borderRadius: "default",
        "&:hover": { backgroundColor: "red" },
      };
      break;
    case "contained":
      sx = {
        px: 1,
        py: 1,
        fontWeight: "bold",
        color: "#454545",
        backgroundColor: "#FFA559",
        borderRadius: "default",
        "&:hover": { backgroundColor: "#454545", color:"#FFA559"},
      };
      break;
    case "outlined":
      sx = {
        px: 0,
        py: 0,
        fontWeight: "bold",
        color: "white",
        backgroundColor: "transparent",
        border:"none",
        '&.MuiButton-outlined': {
          border: 'none',
        },
      };
      break;
  }
  return (
    <Button
      {...props}
      size={size}
      className={className}
      sx={{ ...sx, ...props.sx }}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default MuiButton;
