
interface button {
  text: string;
}

const UIButton:React.FC<button> = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  )
}

export default UIButton;