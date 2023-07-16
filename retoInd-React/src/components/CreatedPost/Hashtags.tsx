interface Props {
  text: string;
  link?: string;
}
export default function Hashtags(props: Props) {
  return (
    <div className="gap-5">
      {props.link ? (
        <a href={props.link}>{props.text}</a>
      ) : (
        <span>{props.text}</span>
      )}
    </div>
  );
}
