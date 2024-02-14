import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";
import { useRef } from "react";

import { NewNodeForm } from "./PopUp";
import {TextFieldFormikGeneratorRequired} from "src/shared/Styles";

export interface MarkdownConfig {
  fieldName: string;
  fieldLabel: string;
  formik: ReturnType<typeof useFormik<NewNodeForm>>;
}
const MarkdownEditor = (props: MarkdownConfig) => {
  //const onChange = (
  //  editorState: string,
  //) => {
  //  const helpers = props.formik.getFieldHelpers(props.fieldName);
  //  helpers.setValue(editorState);
  //};
  return (
    <TextFieldFormikGeneratorRequired
      fieldName={props.fieldName}
      fieldLabel={props.fieldLabel}
      formik={props.formik}
      multiline
    />
  );
};
export const MarkdownEditorWrapper = (props: MarkdownConfig) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <FormControl sx={{ padding: 1, paddingTop: 2 }} onClick={handleClick}>
      <InputLabel
        htmlFor={props.fieldName} /*TODO(skep): needs focused=, etc.*/
      >
        {props.fieldLabel}
      </InputLabel>
      {/*<FormHelperText id={props.fieldName}>{props.fieldLabel}</FormHelperText>*/}
      <MarkdownEditor {...props} />
    </FormControl>
  );
};
