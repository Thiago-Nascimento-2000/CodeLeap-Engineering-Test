
type WrapperProps = { children: React.ReactNode }
export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className="w-[100%] h-[100%] bg-gray-400/80 absolute top-0 left-0">
            {children}
        </div>

    )
}

type ContainerProps = { children: React.ReactNode }
export const Container = ({children}: ContainerProps) => {
    return (
        <div className="w-[660px] h-[146px] p-5 bg-white rounded-[16px] absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg">
            {children}
        </div>
    )
}

type TitleProps = { text: string }
export const Title = ({ text }: TitleProps) => {
    return (
        <h2 className='text-black font-bold text-2xl text-left'>{text}</h2>
    )
}

type ContainerButtonProps = { children: React.ReactNode }
export const ContainerButton = ({ children }: ContainerButtonProps) => {
    return (
        <div className='w-full flex justify-end mt-5 gap-3'>
            {children}
        </div>
    )
}

type ButtonProps = { text: string, onClick: () => void }
export const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className="bg-red-500 rounded-[8px] w-[120px] h-[32px] text-white font-semibold hover:bg-red-600 transition-colors hover:cursor-pointer">
            {text}
        </button>
    )
}