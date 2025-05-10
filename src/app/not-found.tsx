import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <div className="mx-auto flex h-svh max-w-[800px] flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-[24px] font-bold">Not found</h1>
        <Link
          href="/"
          className="rounded bg-[#2A5297] px-6 py-3 leading-none text-white"
        >
          Top page
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
