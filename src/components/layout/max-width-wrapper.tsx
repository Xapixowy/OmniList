type Props = {
  children?: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = (props: Props) => {
  return (
    <div className={`max-width-wrapper mr-auto ml-auto max-w-[var(--max-width)] ${props.className}`}>
      {props.children}
    </div>
  );
};
export default MaxWidthWrapper;
