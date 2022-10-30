import React from 'react';
interface Props {
  pageTitle: { main: string; subheading?: string };
}

function PageHeader(props: Props) {
  const { pageTitle } = props;

  return (
    <header className="flex items-center justify-center py-4 px-2 md:py-8 md:px-12">
      <h1 className="flex flex-col items-center gap-y-0.5 uppercase text-2xl md:text-3xl">
        {pageTitle.main}
        {pageTitle.subheading && (
          <span className="text-base capitalize md:text-lg">{pageTitle.subheading}</span>
        )}
      </h1>
    </header>
  );
}

export default PageHeader;
