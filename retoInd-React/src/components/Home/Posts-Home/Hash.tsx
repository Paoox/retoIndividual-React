export default function Hash(props) {
  const { hash } = props;
  return (
    <div className="hover:bg-slate-200/95 rounded-sm p-[2px] cursor-pointer">
      {hash}
    </div>
  );
}
