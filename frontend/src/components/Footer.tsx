import React from 'react';
import { useTranslation } from 'react-i18next';

const TRANSLATE_FOOTER = 'components.footer';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {t(`${TRANSLATE_FOOTER}.title`)}
          <a
            href="https://github.com/sakshi-jain22"
            target="_blank"
            className="font-medium underline underline-offset-4 pl-1">
            {t(`${TRANSLATE_FOOTER}.author`)}
          </a>
          {t(`${TRANSLATE_FOOTER}.subTitle`)}
          <a
            href="https://github.com/sakshi-jain22/Netflix-Clone"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 pl-1">
            {t(`${TRANSLATE_FOOTER}.github`)}
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
