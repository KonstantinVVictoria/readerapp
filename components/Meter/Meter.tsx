export type MeterProps = {
  max: number;
  value: number;
  colors?: {
    foreground?: string;
    background?: string;
  };
  height: string;
  width: string;
  style?: {
    [key: string]: string;
  };
};
export default function Meter(props: MeterProps) {
  const { colors } = {
    colors: {
      foreground: props?.colors?.foreground || "var(--cloud-gray)",
      background: props?.colors?.background || "var(--obsidian)",
    },
  };
  return (
    <div
      style={{
        position: "relative",
        height: props.height,
        width: props.width,
        backgroundColor: colors.background,
        borderRadius: "100px",
        boxShadow: "0px 0px 9px rgba(0,0,0,0.2)",
        overflow: "hidden",
        ...props.style,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${(props.value / props.max) * 100}%`,
          backgroundColor: colors.foreground,
        }}
      />
    </div>
  );
}
