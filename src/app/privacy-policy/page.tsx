import type { Metadata } from 'next'

import { SITE_URL, OG, TWITTER } from '@/config/constants'
import TextBlock from './textBlock'

export const metadata: Metadata = {
  title: 'Privacy policy',
  openGraph: {
    ...OG,
    title: 'Privacy policy',
    url: SITE_URL + '/privacy-policy',
  },
  twitter: {
    ...TWITTER,
    title: 'Privacy policy',
  },
  alternates: {
    canonical: SITE_URL + '/privacy-policy',
  },
}

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="flex items-center justify-center px-5 pt-[180px] md:pt-[290px]">
        <p className="font-zen text-[7vw] font-bold md:text-[50px]">
          Privacy Policy
        </p>
      </div>
      <div className="mt-7 px-5 md:mt-10">
        <div className="mx-auto w-full max-w-[1000px] space-y-14 pb-16 pt-5 md:pb-20 md:pt-11">
          <div className="md:mb-14">
            <TextBlock>
              At fliQt, accessible at fliqt.io, one of our main priorities is
              the privacy of our visitors. This Privacy Policy document contains
              types of information that is collected and recorded by fliQt and
              how we use it. <br />
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us through email at
              info@fliqt.io
              <br />
              This privacy policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collected in fliQt. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </TextBlock>
          </div>
          <TextBlock title="Consent">
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </TextBlock>
          <TextBlock title="Information we collect">
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information. <br />
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
            <br />
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </TextBlock>
          <TextBlock title="How we use your information">
            We use the information we collect in various ways, including to:
            <ol className="ml-5 list-disc">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ol>
          </TextBlock>
          <TextBlock title="Log Files">
            fliQt follows a standard procedure of using log files. These files
            log visitors when they visit websites. All hosting companies do this
            as part of hosting services&apos; analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users&apos; movement on the website, and
            gathering demographic information.
          </TextBlock>
          <TextBlock title="Cookies and Web Beacons">
            Like any other website, fliQt uses ‘cookies&apos;. These cookies are
            used to store information including visitors&apos; preferences, and
            the pages on the website that the visitor accessed or visited. The
            information is used to optimize the users&apos; experience by
            customizing our web page content based on visitors&apos; browser
            type and/or other information.
          </TextBlock>
          <TextBlock title="DoubleClick DART Cookie">
            Google is one of the third-party vendors on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.fliqt.io and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL –{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              className="underline"
            >
              https://policies.google.com/technologies/ads
            </a>
            . <br />
            <br />
            Some of the advertisers on our site may use cookies and web beacons.
            Our advertising partners are listed below. Each of our advertising
            partners has their own Privacy Policy for their policies on user
            data. For easier access, we hyperlinked to their Privacy Policies
            below. <br />
            <br />
            <ol className="ml-5 list-disc">
              <li>
                Google <br />
                <a
                  href="https://policies.google.com/technologies/ads"
                  target="_blank"
                  className="underline"
                >
                  https://policies.google.com/technologies/ads
                </a>
              </li>
            </ol>
          </TextBlock>
          <TextBlock title="Advertising Partners Privacy Policies">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of fliQt. <br />
            Third-party ad servers or ad networks use technologies like cookies,
            JavaScript, or Web Beacons that are used in their respective
            advertisements and links that appear on fliQt, which are sent
            directly to users&apos; browsers. They automatically receive your IP
            address when this occurs. These technologies are used to measure the
            effectiveness of their advertising campaigns and/or to personalize
            the advertising content that you see on websites that you visit.
            <br />
            <br />
            Note that fliQt has no access to or control over these cookies that
            are used by third-party advertisers.
          </TextBlock>
          <TextBlock title="Third-Party Privacy Policies">
            fliQt&apos;s Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You may find a complete list of
            these Privacy Policies and their links here: Privacy Policy Links.{' '}
            <br />
            <br />
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers&apos;
            respective websites. What Are Cookies?
          </TextBlock>
          <TextBlock title="CCPA Privacy Policy (Do Not Sell My Personal Information)">
            Under the CCPA, among other rights, California consumers have the
            right to: <br />
            Request that a business that collects a consumer&apos;s personal
            data disclose the categories and specific pieces of personal data
            that a business has collected about consumers.
            <br />
            Request that a business delete any personal data about the consumer
            that a business has collected.
            <br />
            Request that a business that sells a consumer&apos;s personal data,
            not sell the consumer&apos;s personal data.
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </TextBlock>
          <TextBlock title="GDPR Privacy Policy (Data Protection Rights)">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following: <br />
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
            <br />
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
            <br />
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
            <br />
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
            <br />
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
            <br />
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
            <br />
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </TextBlock>
          <TextBlock title="Children's Information">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.{' '}
            <br />
            fliQt does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </TextBlock>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicyPage