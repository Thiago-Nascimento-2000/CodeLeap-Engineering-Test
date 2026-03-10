type WrapperProps = { children: React.ReactNode };
export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-[100%] h-[100%] bg-[#777777]/80 absolute top-0 left-0">
      {children}
    </div>
  );
};

type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-[660px] h-[146px] flex flex-col justify-between p-5 bg-white rounded-[16px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg">
      {children}
    </div>
  );
};

type TitleProps = { text: string };
export const Title = ({ text }: TitleProps) => {
  return <h2 className="text-black font-bold text-2xl text-left">{text}</h2>;
};

type ContainerButtonProps = { children: React.ReactNode };
export const ContainerButton = ({ children }: ContainerButtonProps) => {
  return <div className="w-full flex justify-end gap-3">{children}</div>;
};

const ColorsTypes: Record<string, string> = {
  delete: "bg-red-500 hover:bg-red-600",
  cancel: "bg-gray-500 hover:bg-gray-600",
};

type ButtonProps = { text: string; type?: string; onClick: () => void };
export const Button = ({ text, type = "cancel", onClick }: ButtonProps) => {
  const typeButton = ColorsTypes[type] || ColorsTypes.gray;

  return (
    <button
      onClick={onClick}
      className={`rounded-[8px] w-[120px] h-[32px] text-white font-semibold hover:transition-colors hover:cursor-pointer ${typeButton}`}
    >
      {text}
    </button>
  );
};
