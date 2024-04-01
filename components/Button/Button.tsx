"use client";
import { useRef } from "react";
import styles from "./Button.module.css";
export type ButtonProps = {
  color?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  font_color?: string;
  style?: {
    [key: string]: string;
  };
};
export default function Button(props: ButtonProps) {
  const ShadowRef = useRef<HTMLDivElement | null>(null);
  const { color, font_color } = {
    color: props.color || "black",
    font_color: props.font_color || "white",
  };
  return (
    <button
      className={styles.button}
      style={{ ...props.style, backgroundColor: "transparent" }}
      onClick={function (Event) {
        if (props.onClick) props.onClick(Event);
      }}
      onTouchStart={(Event) => {
        const Button = Event.target as HTMLButtonElement;
        const Shadow = ShadowRef.current as HTMLDivElement;
        Button.style.transform = "translateY(0.3rem)";
        Shadow.style.top = "0.3rem";
      }}
      onTouchEnd={(Event) => {
        const Button = Event.target as HTMLButtonElement;
        const Shadow = ShadowRef.current as HTMLDivElement;
        Button.style.transform = "translateY(0)";
        Shadow.style.top = "";
      }}
    >
      <div
        className={styles.container}
        style={{ backgroundColor: color, color: font_color }}
      >
        {props.children}
      </div>
      <div
        className={styles.shadow}
        style={{ color: font_color, backgroundColor: color }}
        ref={ShadowRef}
      />
    </button>
  );
}
