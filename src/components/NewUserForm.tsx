/**
 * First Name
 * Last Name
 * Email
 * Work Emails
 * Phone (optional)
 * Skills (optional)
 * Years of Exp per Skill (optional) Junior, Mid, Senior, Distinguished
 *
 *
 */

const educationSelections: ListboxItem[] = [
  { name: "High School" },
  { name: "Some College" },
  { name: "Associates Degree" },
  { name: "Bachelors Degree" },
  { name: "Masters Degree" },
  { name: "PhD Degree" },
];

import { useState } from "react";
import { TextField, type TextFieldData } from "./TextField";
import { validateEmail, validateName, validatePhone } from "~/utils/validation";
import formatPhoneNumber from "~/utils/formatPhone";
import { Listbox, type ListboxItem } from "./Listbox";

export const NewUserForm = () => {
  const [firstName, setFirstName] = useState<TextFieldData>({
    value: "",
  });
  const [lastName, setLastName] = useState<TextFieldData>({
    value: "",
  });
  const [email, setEmail] = useState<TextFieldData>({
    value: "",
  });
  const [phone, setPhone] = useState<TextFieldData>({
    value: "",
    optional: true,
  });
  const [education, setEducation] = useState<ListboxItem>({ name: "" });

  return (
    <form className="grid grid-cols-12 gap-2">
      <TextField
        id="firstName"
        data={firstName}
        setData={setFirstName}
        validation={validateName}
        validationMessage="Please enter a valid first name."
        label="First Name"
        className="col-span-3"
      />
      <TextField
        id="lastName"
        data={lastName}
        setData={setLastName}
        validation={validateName}
        validationMessage="Please enter a valid last name."
        label="Last Name"
        className="col-span-3"
      />
      <TextField
        id="email"
        data={email}
        setData={setEmail}
        validation={validateEmail}
        validationMessage="Please enter a valid email."
        label="Email"
        className="col-span-4 col-start-1"
      />
      <TextField
        id="phone"
        data={phone}
        setData={setPhone}
        format={formatPhoneNumber}
        validation={validatePhone}
        validationMessage="Please enter a valid phone number."
        label="Phone"
        className="col-span-4 col-start-1"
      />
      <div></div>
      <Listbox
        id="education"
        label="Education"
        items={educationSelections}
        selected={education}
        setSelected={setEducation}
        className="col-span-4 col-start-1"
      />
    </form>
  );
};
