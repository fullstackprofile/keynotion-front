import React from 'react'

import { Title } from '../TItle/Title'
import { Accardion } from '../Accardion/Accardion'

import styles from './DataPrivacyFaq.module.css'

const dataPrivacyFaqItems = [
  {
    title: 'A. What is GDPR and what has keynotion done to comply?',
    subTitle: [
      {
        text: 'GDPR stands for the General Data Protection Regulation and is effective as of May 25th, 2018. GDPR replaces national privacy and security laws that previously existed within the EU with a single, comprehensive EU-wide law that governs the use, sharing, transfer and processing of any personal data that originates from the EU.',
      },
      {
        text: 'Our policy is to respect all laws that apply to our business and this includes GDPR. We also appreciate that our customers have requirements under GDPR that are directly impacted by their use of Keynotion services. We are committed to helping our clients stay in compliance with GDPR and their local requirements.',
      },
      {
        text: 'As part of our commitment to GDPR compliance, we have updated our Privacy Policy.',
      },
      {
        text: 'In addition, here are a few things that Keynotion is committed to doing to ensure our compliance with GDPR and that of our customers:',
      },
      {
        text: 'Keynotion World commits to follow appropriate security measures and precautions in accordance with GDPR.',
      },
      {
        text: 'We ensure that employees authorized to process personal data have committed to confidentiality.',
      },
      {
        text: 'We hold any sub processors that handle personal data, including our data center partners and hosting providers to the same data management, security, and privacy practices and standards to which we hold ourselves.',
      },
      {
        text: 'Keynotion World will assist inquirers, as much as possible; to respond to data subject requests regarding data privacy & GDPR.',
      },
    ],
  },

  {
    title: 'B. What’s changing with keynotion’s privacy policy?',
    subTitle: [
      {
        text: 'Keynotion has released an update to our Privacy Policy which comes into effect starting on May 25th, 2018. Our new policy addresses new data regulations (including GDPR). The most significant changes in the new policy are detailed below. In a nut shell, it provides our clients more control over their information. Our policy explains how you can make choices about your information and the measures we’ve put in place to keep your information secure.',
      },
    ],
  },

  {
    title:
      'C. Where we collect your information, what information we collect & the primary purpose for collection',
    subTitle: [
      {
        text: 'Keynotion has a research department who is tasked with the responsibility of finding relevant potential participants to our events. The department does in depth market research on LinkedIn and Google to collect data. The data we collect include Name (First & Last Name) and Company Name only!',
      },
      {
        text: 'Through human and artificial intelligence, the department is able to generate the emails of the potential participants from the Full Name and Company Name information collected.',
      },
      {
        text: 'Our event invitations are sent to only individuals we believe are relevant for the event and their attendance would be beneficial for their career development through benchmarking and networking with other peers from the industry. We admit that sometimes our invitations reach few irrelevant people. However we provide possibility to UNSUBSCRIBE from our mailing list. Please note that by unsubscribing you will not receive any invitations of any of our other events which may be relevant to you.',
      },
      {
        text: 'In addition, we collect data via our website. Our website provides the possibility to submit your information to register and request for the agenda of our events. The personal information provided is being collected for legitimate business purposes, which includes processing event registrations and enquiries, keeping you informed about new events, products or offers and providing the best possible service to you. Whenever we process data for these purposes we will ensure that we always keep your Personal Data rights in high regard and take account of these rights.',
      },
      {
        text: 'The provision of this information is voluntary. However, if you do not provide the information requested, we may be unable to process your registration or enquiry. All information provided by you will be held in the strictest confidence.',
      },
      {
        text: 'To register or request for our event brochure you may need to provide the following information (however is not limited to):',
      },
      { text: 'Full Name & Job Title' },
      { text: 'Company Name & Address' },
      { text: 'Phone & Fax Number' },
      { text: 'Email Address' },
      { text: 'Billing information' },
      { text: 'Interest Areas & Preferences' },
      {
        text: 'Keynotion is the sole owner of the information collected on our site and by sending us your information you give us explicit consent/right to process your information to respond to your enquiries and keep you informed about our current and future events including other offers.',
      },
      {
        text: 'We only collect data that is necessary for the purposes mentioned above. Keynotion does not receive or purchase any contacts from a third party.',
      },
    ],
  },

  {
    title: 'D. Direct Marketing',
    subTitle: [
      {
        text: 'If you no longer wish to receive newsletters or promotional materials, you may opt-out of receiving these communications. You can do it by following the unsubscribe link placed in the footer of the promotional email or, if by post, by returning the letter to us with “unsubscribe” marked upon it. Or you can simply send an email to info@key-notion.com and ask to be unsubscribed.',
      },
    ],
  },
  {
    title: 'E. Use of cookies & log files',
    subTitle: [
      {
        text: 'When you visit our site, a cookie (a very small text file) is placed on your device which is powered by google ads. If you accept it, it is used to provide you with a personalized experience and to assist in the collection of the site visitation statistics. You may refuse the cookie, if you wish. To do so, you will need to check your browser settings.',
      },
      {
        text: 'The cookies collect certain information about your computer hardware and software, this includes',
      },
      { text: '(however is not limited to):' },
      { text: 'IP Address' },
      { text: 'Browser Type' },
      { text: 'Operating System' },
      { text: 'Access Times' },
      { text: 'Referring Website Addresses' },
      {
        text: 'This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of Keynotion websites.',
      },
    ],
  },
  {
    title: 'F. Who has acces to your information and to who is it disclosed?',
    subTitle: [
      {
        text: 'Keynotion does not share or publish our collected data. We do not rent or sell our customer e-mail lists. We may share some information of registered delegates & Sponsors (First & Last Name, Job Title Company, Country and Email address) with other Event attendees and if you do not want us to share your information with our attendees during the event please email info@key-notion.com',
      },
    ],
  },
  {
    title: 'G. Securty',
    subTitle: [
      {
        text: 'Keynotion takes precautions to protect your information. When users submit sensitive information (such as a credit card number) over the internet, we protect it through the use of encryption, such as the Secure Socket Layer (SSL) protocol. Access to all of our users’ information is restricted in our offices. Only employees who need the information to perform a specific job are granted access to personally identifiable information. The servers that we store personally identifiable information on are kept in a secure environment.',
      },
    ],
  },
  {
    title: 'H. Links to other websites',
    subTitle: [
      {
        text: 'Keynotion Website and Event Brochure contains some links to other sites. Please be aware that Keynotion is not responsible for the privacy practices of such other sites. This privacy statement applies solely to the information collected by Keynotion.',
      },
    ],
  },
  {
    title: 'I. How do we protect and safeguard your information',
    subTitle: [
      {
        text: 'Your information is safe with us. All our data are securely stored on data servers of our hosting providers. Keynotion S.R.O has confidentiality agreement with all our Hosting providers and they abide by security decisions and provisions established for their services.',
      },
      { text: 'Email Hosting providers: ACTIVE 24, sro, Wedos and mySMTP' },
      { text: 'Data storage provider: Salesmanago (CRM System)' },
      { text: 'EventBuizz Web application' },
    ],
  },
  {
    title: 'J. How can you verify, modify or delete your information',
    subTitle: [
      {
        text: 'Keynotion will make every attempt to keep your personal data accurate, complete and up to date. If your personal information is incorrect, changes or if you no longer wish to receive information from Keynotion, we will endeavor to correct, update or remove your information as swiftly as possible. This can be done by e-mailing info@key-notion.com. In case you want to verify which data is stored on your behalf, to have it modified corrected or deleted, please contact our data officer – Email:info@key-notion.com and explicitly specify your request. Special attention is drawn to the consequences of a request for deletion, in which case any possibility to be able to contact you will be lost.',
      },
    ],
  },
  {
    title: 'K. Data stroage and retention',
    subTitle: [
      {
        text: 'The personal data we hold is stored on Keynotion servers and on the servers of cloud based database management services of our hosting providers.  Keynotion retains data for the duration of the customer’s or member’s business relationship with the Keynotion. For more information on where and how long your personal data is stored, and for more information on your rights of erasure, please contact the Keynotion’s data protection officer at info@key-notion.com',
      },
      {
        text: 'Your personal data will be part of a list of contact details shared internally amongst the staff of Keynotion S.R.O services for the purpose of contacting you in the future, in the context of Keynotion’s activities. Personal data will be kept for a maximum 12 months from the day of the reception.',
      },
    ],
  },
  {
    title: 'L. Contact information',
    subTitle: [
      {
        text: 'If you have questions regarding our activities, feel free to contact the support team, operating under the responsibility of the data protection officer.',
      },
    ],
  },
  {
    title: 'M. GDPR compliance',
    subTitle: [
      {
        text: 'Keynotion respects your right to privacy. We ensure all data is managed lawfully, fairly and transparently. You have a right to be forgotten and can email us at info@key-notion.com to request your personal data or any information related to privacy.',
      },
    ],
  },
  {
    title: 'N. Recourse',
    subTitle: [
      {
        text: 'Keynotion will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Notice.',
      },
      {
        text: 'If you do not consent to this storing or processing of your personal information please email info@key-notion.com indicating your wishes.',
      },
      {
        text: 'Remarks can be addressed to the KEYNOTION S.R.O Data Protection Officer.',
      },
    ],
  },
]

export const DataPrivacyFaq = () => {
  return (
    <div className={styles.dataPrivacyFaq}>
      <Title title_2="FAQ" />
      <div className={styles.dataPrivacyFaq_heading}>
        <p className={styles.dataPrivacyFaq_subTitle}>
          Frequently Asked Questions
        </p>
      </div>
      <div className={styles.dataPrivacyFaq_content}>
        {dataPrivacyFaqItems.map(({ title, subTitle }, index) => {
          return <Accardion key={index} title={title} subTitle={subTitle} />
        })}
      </div>
    </div>
  )
}
