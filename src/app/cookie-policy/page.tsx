import PageTitle from "@/components/pageTitle";

export default function CookiePolicy() {
  return (
    <main>
      <PageTitle>Cookie Policy</PageTitle>
      <section className="mb-[256px] max-md:mb-[82px]">
        <div className="container">
          <div className="max-w-[600px] mx-auto mb-[128px]">
            <h2 className="text-[24px] mb-[24px]">What are cookies?</h2>
            <div className="mb-[24px]">
              A cookie is a small text file, which may contain an anonymous
              unique identifier, that is sent to your browser from a Web site
              and stored on your computer&apos;s hard drive.
            </div>
            <h2 className="text-[24px] mb-[24px]">Disabling Cookies</h2>
            <div className="mb-[24px]">
              You can prevent cookies from being set by adjusting your browser
              settings (see your browser&apos;s help section for information on
              how to do this). please note that disabling cookies will affect
              the functionality of this web site and many other web sites you
              visit.
            </div>
            <h2 className="text-[24px] mb-[24px]">Third Party Cookies</h2>
            <div className="mb-[24px]">
              This site uses Google Analytics, one of the most widely used and
              trusted analytics solutions on the web, to help us understand how
              you use the site and how we can improve your experience. These
              cookies may track things like time spent on the site and pages
              visited so that we can continue to create engaging content, etc.
              For more information about Google Analytics cookies, please visit
              the official Google Analytics page.
            </div>
            <h2 className="text-[24px] mb-[24px]">Contact Us</h2>
            <div className="mb-[24px]">
              If you have any questions about this policy, please contact us.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
