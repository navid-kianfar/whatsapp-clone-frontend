import React, { useMemo } from "react";
import { parsePhoneNumber } from "awesome-phonenumber";

const PhoneFormatter = ({ phone }) => {
  const parsed = useMemo(() => parsePhoneNumber(phone), [phone]);

  return <span>{parsed.number?.international || phone}</span>;
};

export default PhoneFormatter;
