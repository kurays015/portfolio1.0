const Footer = ({ isAbsolute }) => {
  const isBottom = isAbsolute ? "absolute" : "static";
  return (
    <footer
      className={`bg-gray-950 text-gray-400 font-semibold ${isBottom} bottom-0 w-full flex justify-center p-5`}
    >
      <h3>Copyright © 2023. All rights are reserved</h3>
    </footer>
  );
};

export default Footer;
