function Title({ children, className }) {
  return (
    <h1
      className={`text-2xl sm:text-3xl lg:text-4xl font-dream2 text-black capitalize font-semibold ${className}`}
    >
      {children}
    </h1>
  );
}

export default Title;
