import styles from "./Card.module.css";
export type CardProps = {
  color?: string;
  children: React.ReactNode;
  style?: {
    [key: string]: string;
  };
};
export default function Card(props: CardProps) {
  const { color } = {
    color: props.color || "gray",
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: color, ...props.style }}
    >
      <div>{props.children}</div>
    </div>
  );
}
type BadgeProps = CardProps & {
  colors?: {
    background?: string;
    border?: string;
  };
};
export function Badge(props: BadgeProps) {
  const { colors, children, style } = props;
  return (
    <Card
      color={colors?.background}
      style={{
        backgroundColor: "transparent",
        border: `2px solid ${colors?.border || "black"}`,
        ...style,
      }}
    >
      {children}
    </Card>
  );
}
