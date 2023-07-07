export default function ButtonLogin(props) {
  const { title, icon, text, color } = props;

  return (
    <button
      type="submit"
      className={`text-white bg-${color} w-full mt-1 mb-1 text-[10px] p-2 rounded-md flex justify-center gap-2`}
    >
      <img src={icon} className="w-3" alt={title} />
      {text}
    </button>
  );
}
