import Image from "next/image";

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image src="/spinner.svg" alt="loading..." width={208} height={208} />
    </div>
  );
};

export default loading;
