export default function MenuIcons(props) {
  const { icon } = props;
  return (
    <div className="flex p-[2px] hover:bg-slate-300 rounded-sm cursor-pointer">
      <img src={icon} alt="" className="h-4" />
    </div>
  );
}
