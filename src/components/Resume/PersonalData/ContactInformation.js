import React from 'react';
import { PhoneIcon, EmailIcon, LinkedinIcon, GithubIcon, WebIcon } from '../../Icons/Icons';

// Subcomponent
function ContactLink({ icon, href, text }) {
  // const iconStyles = 'w-4 h-4 inline fill-current';
  const linkStyles = 'inline-flex items-center py-1 hover:underline';
  return (
    <a href={href} className={linkStyles}>
      {icon}
      <span className="pl-2">{text}</span>
    </a>
  );
}

function ContactInformation() {
  const iconStyles = 'w-4 h-4 inline fill-current';

  return (
    <div className="contact-information pt-8 pb-4">
      <div className="contact-information__title text-lg uppercase pb-1 mb-4 border-blue-900 border-b-4 md:inline-block">
        Datos de contacto
      </div>
      <ul className="text-base">
        <li className="py-1 flex items-center">
          <ContactLink
            text="992344371"
            href="tel:992344371"
            icon={<PhoneIcon className={iconStyles} />}
          />
        </li>
        <li>
          <ContactLink
            text="jcahuanam@gmail.com"
            href="mailto:jcahuanam@gmail.com"
            icon={<EmailIcon className={iconStyles} />}
          />
        </li>
        <li className="py-1 flex items-center">
          <ContactLink
            text="jcahuana.github.io"
            href="https://jcahuana.github.io"
            icon={<WebIcon className={iconStyles} />}
          />
        </li>
        <li>
          <ContactLink
            text="linkedin.com/in/jcahuanam"
            href="https://linkedin.com/in/jcahuanam/"
            icon={<LinkedinIcon className={iconStyles} />}
          />
        </li>
        <li>
          <ContactLink
            text="github.com/jcahuana"
            href="https://github.com/jcahuana"
            icon={<GithubIcon className={iconStyles} />}
          />
        </li>
      </ul>
    </div>
  );
}

export default ContactInformation;
