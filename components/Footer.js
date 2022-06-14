import Link from 'next/link';

const Footer = (e) => {
  return (
    <>
      <div className="w-full py-10 flex flex-col items-center px-5 md:px-0">
        <div className=" w-full max-w-2xl flex flex-col text-center">
          <p className=" text-2xl text-primary">Ingo</p>
          <p className=" text-lg">Your CS Information Board on the go</p>

          {/* links */}
          <div className="w-full flex justify-around px-10 mt-16 mb-4">
            <p>Blog</p>
            <p>Bulletin</p>
            <p>CAPSTONE</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className="w-full flex justify-around px-10">
            <p>Privacy Statement</p>
            <p>Terms and Conditions</p>
          </div>
          <div className="divider" />
          <p className=" mb-4">Other UCC Links</p>
          <div className="w-full flex justify-around px-10 underline-offset-4">
            <p className="link">Escord</p>
            <Link href="https://ucc-alumnus.vercel.app" passHref>
              <p className="link">Alumnus</p>
            </Link>
            <p className="link">ACES</p>
            <p className="link">Enrollment</p>
            <p className="link">Thesis</p>
          </div>
          <div className="divider" />
          <p className="">
            Under the management of University of Caloocan City - Computer
            Science Council
          </p>
          <p>Project Iron Ingot &copy; 2022</p>
        </div>
      </div>
    </>
  );
};

export default Footer;