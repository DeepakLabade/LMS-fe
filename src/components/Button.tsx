export interface ButtonProps {
  title: string,
  onclick: () => void
}

const Button = (props: ButtonProps) => {
  return (
      <div>
      <button onClick={props.onclick} className='border border-black px-4 py-1.5 rounded-lg bg-black text-white font-semibold'>{props.title}</button>
    </div>
  )
}

export default Button