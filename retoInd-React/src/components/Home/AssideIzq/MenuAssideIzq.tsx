export default function MenuAssideIzq(props) {
  const { icon, text } = props;
  return (
    <div className="hover:bg-slate-300/50 rounded-md p-1 flex items-center cursor-pointer">
      <img src={icon} alt="" className="text-[12px] px-1 h-5" />
      <span className="text-[10px] px-1 text-gray-600 hover:text-[#3b49df] hover:underline ">
        {text}
      </span>
    </div>
  );
}
