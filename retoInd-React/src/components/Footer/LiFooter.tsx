export default function LiFooter(props) {
  const { text } = props;
  return (
    <li>
      <a href="">{text}</a>
      <span className="text-[4px] px-1 align-middle m-1  from-stone-900">
        ⚫
      </span>
    </li>
  );
}
