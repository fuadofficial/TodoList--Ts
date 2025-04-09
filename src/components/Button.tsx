type titleType = {
  children: React.ReactNode | string;
  className: string;
  onClick?: () => void;
};

const Button = ({ children, className, onClick }: titleType) => {
  return (
    <div>
      <button type="submit" className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
