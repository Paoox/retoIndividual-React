export default function Listings(props) {
  const { title, type } = props;
  return (
    <div className="p-3 border-b border-zinc-200">
      <p className="text-zinc-700 text-[10px] hover:text-sky-800 cursor-pointer">
        {title}
      </p>
      <p className="text-zinc-500 text-[8px]">{type}</p>
    </div>
  );
}
