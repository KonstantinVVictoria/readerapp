import Card, { CardProps } from "../Cards/Card";
import styles from "./Form.module.css";
export type FormProps = CardProps & {};
export default function Form(props: FormProps) {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        ...props.style,
      }}
      color={props.color}
    >
      {props.children}
    </Card>
  );
}
export type FieldProps = {
  label: string;
  unique_id: string;
  color?: {
    label?: string;
    input?: {
      text?: string;
      background?: string;
    };
  };
  type?: React.HTMLInputTypeAttribute;
};
export function Field(props: FieldProps) {
  return (
    <section className={styles.field}>
      <p style={{ color: props.color?.label }}>{props.label}</p>
      <input
        id={props.unique_id}
        style={{
          color: props.color?.input?.text,
          background: props.color?.input?.background,
        }}
        type={props.type}
      />
    </section>
  );
}
