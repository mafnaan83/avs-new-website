interface HeadingProps {
  text: string;
  className: string;
}

const HeadingComponent = ({ text, className = "" }: HeadingProps) => {
  return (
    <h2
      className={`rounded-sm bg-[#FFEFD7]/60 text-[#C5A059] py-1 px-4 text-sm font-medium w-fit ${className}`}
    >
      {text}
    </h2>
  );
};

export default HeadingComponent;
