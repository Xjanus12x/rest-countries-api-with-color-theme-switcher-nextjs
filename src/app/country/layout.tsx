import { PropsWithChildren } from "react";

type CountryLayout = PropsWithChildren;
export default function CountryLayout({ children }: CountryLayout) {
  return <main className="row-start-2 overflow-auto ">{children}</main>;
}
