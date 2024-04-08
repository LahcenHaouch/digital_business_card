type Props = {
  title: string;
  description: string;
};

export default function Content({ title, description }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
