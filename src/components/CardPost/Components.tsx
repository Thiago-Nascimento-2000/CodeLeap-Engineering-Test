import type { ReactNode } from "react";

type ContainerProps = { children: React.ReactNode };
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="border-1 border-[#99999999] rounded-[16px] w-[752px] h-auto">
      {children}
    </div>
  );
};

type HeaderProps = {
  h2: string;
  onClickDelete?: () => void;
  onClickEdit?: () => void;
};
export const Header = ({ h2, onClickDelete, onClickEdit }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between gap-2 p-5 bg-[#7695EC] w-full h-[70px] rounded-t-[15px] text-white text-2xl font-semibold">
      <h2 className="truncate w-[75%] text-left">{h2}</h2>
      <div className="flex gap-4">
        <img
          src="./ic_baseline-delete-forever.png"
          alt="trash icon"
          className="inline-block w-[30px] h-[30px] cursor-pointer"
          onClick={onClickDelete}
        />
        {onClickEdit &&
          <img
          src="./bx_bx-edit.png"
          alt="edit icon"
          className="inline-block w-[30px] h-[30px] cursor-pointer"
          onClick={onClickEdit}
        />}
      </div>
    </header>
  );
};

type MainProps = {
  username: string;
  content: string;
  created_datetime: ReactNode;
};
export const Main = ({ username, content, created_datetime }: MainProps) => {
  return (
    <main className="m-5 flex flex-col">
      <div className="flex w-full justify-between">
        <h2 className="text-[#777777] font-semibold text-[18px]">
          @{username}
        </h2>
        <span className="text-[#777777] text-[18px]">{created_datetime}</span>
      </div>
      <div className="flex mt-5 text-left">
        <p className="font-medium text-[18px] text-black w-full whitespace-pre-wrap break-words line-clamp-4">
          {content}
        </p>
      </div>
    </main>
  );
};
