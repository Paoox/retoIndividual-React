export default function ButtonLogin(props) {
  const { title, icon, text, className } = props;

  return (
    <button
      type="submit"
      className={`text-white ${className} w-full mt-1 mb-1 text-[10px] p-2 rounded-md flex justify-center gap-2 `}
    >
      <img src={icon} className="w-4" alt={title} />
      {text}
    </button>
  );
}
