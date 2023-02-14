const CardAnaly = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 aspect-square w-32 text-teal-900 bg-white rounded-lg shadow-lg text-center">
      {children}
    </div>
  );
};

export default CardAnaly;
