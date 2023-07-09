export default function UserData(props) {
  const { text } = props;
  return (
    <div className="flex flex-col">
      <label htmlFor="text" className="text-black text-[12px]">
        {text}
      </label>
      <input
        type={text}
        className="border border-x-gray-400 w-full mt-1 mb-1 text-[10px] p-2 rounded-md h-7"
      />
    </div>
  );
}
