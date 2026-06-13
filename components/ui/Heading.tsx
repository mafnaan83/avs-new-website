interface HeadingProps {
  text: string;
  className: string;
}

const HeadingComponent = ({ text, className = "" }: HeadingProps) => {
  return (
    <h2
      className={`rounded-sm bg-blue-50 text-blue-700 py-1 px-4 text-sm font-medium w-fit ${className}`}
    >
      {text}
    </h2>
  );
};

export default HeadingComponent;
