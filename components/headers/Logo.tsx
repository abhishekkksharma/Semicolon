import Image from "next/image";
import Link from "next/link";
import LogoImg from "../../assets/logo.png";

function Logo({
  className = "",
  size = 40,
  href = "/",
  showText = true,
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 select-none ${className}`}
    >
      {showText && (
        <h1
          className="font-extrabold tracking-tight leading-none"
          style={{
            fontSize: `${size * 0.7}px`,
          }}
        >
          <span className="text-zinc-500 dark:text-zinc-400">Know</span>
          <span className="text-zinc-900 dark:text-zinc-100">Mo</span>
          <span className="text-pink-600">.</span>
        </h1>
      )}
    </Link>
  );
}

export default Logo;