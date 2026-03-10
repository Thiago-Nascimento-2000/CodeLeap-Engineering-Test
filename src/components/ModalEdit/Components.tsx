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
    <div className="w-[660px] h-fit gap-5 flex flex-col justify-between p-5 bg-white rounded-[16px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg">
      {children}
    </div>
  );
};

type TitleProps = { text: string };
export const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="text-black font-semibold text-2xl text-left">{text}</h2>
  );
};

type ContainerButtonProps = { children: React.ReactNode };
export const ContainerButton = ({ children }: ContainerButtonProps) => {
  return <div className="w-full flex justify-end gap-3">{children}</div>;
};

type ContainerInputProps = { children: React.ReactNode };
export const ContainerInput = ({ children }: ContainerInputProps) => {
  return <div>{children}</div>;
};

type LabelProps = { text: string };
export const Label = ({ text }: LabelProps) => {
  return (
    <label
      htmlFor="Title"
      className="text-black flex mb-2 font-[16px] font-weight-[400]"
    >
      {text}
    </label>
  );
};

type InputProps = { placeholder: string };
export const inputTitle = ({ placeholder }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full h-[32px] text-black px-2 rounded-[8px] border-1 border-[#77777777]"
    ></input>
  );
};

type TextAreaProps = { placeholder: string };
export const inputContent = ({ placeholder }: TextAreaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className="w-full h-[100px] text-black px-2 rounded-[8px] border-1 border-[#77777777] p-2"
    ></textarea>
  );
};

const ColorsTypes: Record<string, string> = {
  save: "bg-green-500 hover:bg-green-600 text-white transaction-all duration-300",
  cancel:
    "text-black border-1 border-black hover:bg-red-500 hover:text-white hover:border-none transaction-all duration-300",
};

type ButtonProps = {
  text: string;
  type?: string;
  onClick: () => void;
};
export const Button = ({ text, type = "cancel", onClick }: ButtonProps) => {
  const typeButton = ColorsTypes[type] || ColorsTypes.gray;

  return (
    <button
      onClick={onClick}
      className={`rounded-[8px] w-[120px] h-[32px] font-semibold hover:transition-colors hover:cursor-pointer ${typeButton}`}
    >
      {text}
    </button>
  );
};
