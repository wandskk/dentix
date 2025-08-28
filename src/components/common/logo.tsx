import Image from "next/image";

export function Logo() {
  return (
    <div className="relative w-[100px] h-[28px]">
      <Image
        src="/logo-dentix.png"
        alt="Dentix logo"
        fill
        sizes="(max-width: 768px) 80px, (max-width: 1200px) 120px, 150px"
        className="object-contain"
        priority
      />
    </div>
  );
}
