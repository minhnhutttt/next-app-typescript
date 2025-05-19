"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Profile = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="px-5"
    >
      <div className="flex justify-center items-center">
        <h3 className="font-semibold relative pl-10 pr-7 flex items-center justify-center py-9">
            <span className="w-[92px] h-full border border-white absolute left-0 border-r-0"></span>
            <div className="">
                <p className="md:text-[80px] tracking-[0.2em] leading-none">経愛に宿した経営人格</p>
                <p className="md:text-[30px] tracking-[0.2em]">事業家、挑戦者、多角経営、海外展開、実践者、そして愛。</p>
            </div>
            <span className="w-[92px] h-full border border-white absolute right-0 border-l-0"></span>
        </h3>
      </div>
    </section>
  );
};

export default Profile;
