const UnderlineLastChars = ({ children }) => {
  return (
    <span className="relative inline-block">
      {children}
      <span
        className="absolute left-0 -bottom-1 w-full h-1 md:h-2 bg-[#49CF38]"
      />
    </span>
  );
};

export default UnderlineLastChars;
