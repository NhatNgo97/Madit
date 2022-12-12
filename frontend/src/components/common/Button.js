import clx from "classnames";

function Button({ type, className, children, ...restProps }) {
  const classes = clx(
    "text-center font-semibold hover:cursor-pointer flex justify-center items-center p-2",
    className,
    {
      "bg-blue-500 text-white hover:bg-blue-400 rounded-3xl":
        type === "primary" || !type,
      "text-blue-500 bg-transparent border-blue-500 border-2 hover:bg-slate-50 rounded-3xl w-full":
        type === "secondary",
      "flex flex-row items-center gap-1 hover:bg-[rgba(26,26,27,0.1)] p-2":
        type === "post",
    }
  );
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
