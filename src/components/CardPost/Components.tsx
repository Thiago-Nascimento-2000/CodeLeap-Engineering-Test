
type ContainerProps = { children: React.ReactNode }
export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="border-1 border-[#99999999] rounded-[16px] w-[752px] h-auto">
            {children}
        </div>
    )
}

type HeaderProps = { h2: string }
export const Header = ({ h2 }: HeaderProps) => {
    return (
        <header className='flex items-center justify-between gap-2 p-5 bg-[#7695EC] w-full h-[70px] rounded-t-[15px] text-white text-2xl font-semibold'>
            <h2>{h2}</h2>
            <div>
                <img src='./ic_baseline-delete-forever.png' alt="trash icon" className='inline-block w-[30px] h-[30px] mr-4 cursor-pointer' />
                <img src='./bx_bx-edit.png' alt="edit icon" className='inline-block w-[30px] h-[30px] cursor-pointer' />
            </div>
        </header>
    )
}

type MainProps = { username: string, content: string, createdAt: string }
export const Main = ({ username, content, createdAt }: MainProps) => {
    return (
        <main className='m-5 flex flex-col'>
            <div className="flex w-full justify-between">
                <h2 className="text-[#777777] font-semibold text-[18px]">{username}</h2>
                <span className="text-[#777777] text-[18px]">{createdAt}</span>
            </div>
            <div className="flex mt-5 text-left">
                <p className="font-medium text-black text-[18px] flex">{content}</p>
            </div>
        </main>
    )
}