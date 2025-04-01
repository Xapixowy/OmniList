type Props = {
  children?: React.ReactNode;
  className?: string;
};

const MaxWidthWrapper = (props: Props) => {
  return (
    <div className={`h-full max-w-[var(--max-width)] ml-auto mr-auto max-width-wrapper ${props.className}`}>
      {props.children}
    </div>
  );
};
export default MaxWidthWrapper;
