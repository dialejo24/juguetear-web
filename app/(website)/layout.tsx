import { Navbar } from "components/Navbar/Navbar";
import { client } from "lib/client";
import { groq } from "next-sanity";
import type { LayoutSchema } from "types/layout-schema-types";

import { Footer } from "components/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

export default async function WebsiteLayout({ children }: Props) {
  const { navbarLinks, footerLinks } = await client.fetch<LayoutSchema>(
    groq`*[_type == 'layout'][0]`
  );

  return (
    <>
      <Navbar links={navbarLinks} />
      <main>{children}</main>
      <Footer links={footerLinks} />
    </>
  );
}
