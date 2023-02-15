import Link from "next/link";

export default function Footer() {
  var year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center mb-8">
      <div className="">&copy; Copyright {year}. Designed and developed by</div>
      <div>
        <Link
          href="https://linktr.ee/kraizan"
          target={"_blank"}
          className="link-underline pb-1"
        >
          Kraizan
        </Link>
      </div>
    </footer>
  );
}
