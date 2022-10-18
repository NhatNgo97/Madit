import clx from "classnames";

function Button({ type, className, children, ...restProps }) {
  const classes = clx(
    "text-center rounded-3xl bg-blue-500 text-white font-bold hover:cursor-pointer flex justify-center items-center p-2",
    className,
    {
      "bg-blue-500 text-white hover:bg-blue-400": type === "primary" || !type,
      "text-blue-500 bg-transparent border-blue-500 border-2 hover:bg-slate-50":
        type === "secondary",
    }
  );
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
