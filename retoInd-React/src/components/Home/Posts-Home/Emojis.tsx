export default function Emojis(props) {
  const { emoji, name } = props;
  return <img src={emoji} alt={name} className="h-3" />;
}
