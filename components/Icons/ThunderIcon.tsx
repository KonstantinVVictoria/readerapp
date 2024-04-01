import { GenericIconProps } from "./IconGeneric";

type ThunderIconProps = GenericIconProps & {
  colors?: {
    main: string;
  };
};
export default function ThunderIcon(props: ThunderIconProps) {
  const { width, height, colors } = {
    width: props.width || "2rem",
    height: props.height || "2rem",
    colors: props.colors || {
      main: "gray",
    },
  };
  return (
    <svg
      fill="#000000"
      width={width}
      height={height}
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        ...props.style,
      }}
    >
      <path
        id="primary"
        d="M18.82,9.18A2,2,0,0,0,17,8H15.19l1.33-3.26a2,2,0,0,0-.19-1.84A2.06,2.06,0,0,0,14.62,2H10.28A2,2,0,0,0,8.37,3.27l-3.23,8a2,2,0,0,0,.2,1.83,2.06,2.06,0,0,0,1.71.9H9.81L8,20.74a1,1,0,0,0,.5,1.15A1.12,1.12,0,0,0,9,22a1,1,0,0,0,.76-.35l8.8-10.37A2,2,0,0,0,18.82,9.18Z"
        style={{ fill: colors?.main }}
      ></path>
    </svg>
  );
}
