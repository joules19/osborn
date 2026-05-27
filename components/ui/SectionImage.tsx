import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function SectionImage({
  src,
  alt,
  className,
  priority = false,
}: SectionImageProps) {
  return (
    <div
      className={cn(
        "relative rounded overflow-hidden shadow-md aspect-[4/3]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
