export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  profilePicture?: string;
}

export interface UserStoreState {
  user: User | null;
  expiresAt: number | null;
  setUser: (user: User | null) => void;
  setExpiration: (expiresAt: number | null) => void;
  clearUser: () => void;
}

export enum Role {
  ROLE_USER = "ROLE_USER",
  ROLE_ADMIN = "ROLE_ADMIN",
  ROLE_RECRUITER = "ROLE_RECRUITER",
  ROLE_CANDIDATE = "ROLE_CANDIDATE",
}

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
];

export type QuestionType =
  | "short-answer"
  | "paragraph"
  | "multiple-choice"
  | "checkboxes"
  | "dropdown"
  | "linearScale"
  | "dateTime";

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[];
  min?: number;
  max?: number;
  description?: string;
}

export interface SortableQuestionProps {
  question: Question;
  index: number;
  updateQuestion: (id: string, updates: Partial<Question>) => void;
  deleteQuestion: (id: string) => void;
  copyQuestion: (id: string) => void;
  addOption: (questionId: string) => void;
  updateOption: (questionId: string, optionIndex: number, value: string) => void;
}

export type Form = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};

export type FieldValue = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

export enum View {
  PERSONAL = "personal",
  ORGANIZATION = "organization",
}

export enum ORG_ROLES {
  ROLE_ORG_ADMIN = "Admin",
  ROLE_ORG_HR = "HR",
  ROLE_ORG_INTERVIEWER = "Interviewer",
}

export type ORG_ROLE = "ROLE_ORG_ADMIN" | "ROLE_ORG_HR" | "ROLE_ORG_INTERVIEWER";

export type Member = {
  userId: string;
  email: string;
  roles: ORG_ROLE[];
};

export interface Org {
  id: string;
  name: string;
  createdBy: string;
  members: {
    userId: string;
    email: string;
    roles: ["ROLE_ORG_ADMIN" | "ROLE_ORG_HR" | "ROLE_ORG_INTERVIEWER"];
  }[];
}

export interface Job {
  id: string;
  title: string;
  description: string;
  organizationId: string;
  createdBy: string;
  updatedBy: string;
  updatedAt: string;
  createdAt: string;
  active: boolean;
}

export enum ElementType {
  SHORT_TEXT = "short_text",
  LONG_TEXT = "long_text",
  MULTIPLE_CHOICE = "multiple_choice",
  CHECKBOX = "checkbox",
  DROPDOWN = "dropdown",
  DATE = "date",
  TIME = "time",
  FILE_UPLOAD = "file_upload",
}

// Base form element interface
export interface BaseFormElement {
  id: string;
  type: ElementType;
  question: string;
  required: boolean;
}

// Specific form element interfaces
export interface TextFormElement extends BaseFormElement {
  type: ElementType.SHORT_TEXT | ElementType.LONG_TEXT;
  options: never[];
}

export interface ChoiceFormElement extends BaseFormElement {
  type: ElementType.MULTIPLE_CHOICE | ElementType.CHECKBOX | ElementType.DROPDOWN;
  options: string[];
}

export interface DateFormElement extends BaseFormElement {
  type: ElementType.DATE;
  options: never[];
}

export interface TimeFormElement extends BaseFormElement {
  type: ElementType.TIME;
  options: never[];
}

export interface FileFormElement extends BaseFormElement {
  type: ElementType.FILE_UPLOAD;
  options: never[];
}

// Union type for all form elements
export type FormElement =
  | TextFormElement
  | ChoiceFormElement
  | DateFormElement
  | TimeFormElement
  | FileFormElement;

// Form data interface
export interface FormData {
  title: string;
  description: string;
  elements: FormElement[];
}

// Form settings interface
export interface FormSettings {
  collectEmail: boolean;
  limitResponses: boolean;
  responseLimit: number;
  showProgressBar: boolean;
  shuffleQuestions: boolean;
  confirmationMessage: string;
  redirectUrl: string;
  theme: string;
  headerColor: string;
  fontFamily: string;
}

// Form response data
export interface FormResponse {
  id: string;
  submittedAt: string;
  data: Record<string, any>;
}

// Component prop interfaces
export interface FormElementEditorProps {
  element: FormElement;
  updateElement: (id: string, updates: Partial<FormElement>) => void;
}

export interface FormPreviewProps {
  title: string;
  description: string;
  elements: FormElement[];
}

export interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}
