import Image from "next/image";

type LogoProps = {
  /** Pixel size of the mark. */
  size?: number;
  /** Show the wordmark next to the mark. */
  withWordmark?: boolean;
  className?: string;
};

export default function Logo({
  size = 32,
  withWordmark = false,
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/yapper-tile.svg"
        alt=""
        width={size}
        height={size}
        priority
        className="shrink-0 rounded-[7px]"
      />
      {withWordmark && (
        <span className="font-display text-[1.05rem] font-bold tracking-tight text-white">
          Yapper
        </span>
      )}
    </span>
  );
}
