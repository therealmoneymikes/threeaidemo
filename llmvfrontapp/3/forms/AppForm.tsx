import { StyleSheet, Text, View } from "react-native";
import React, { ReactElement } from "react";
import { Formik, Field } from "formik";

interface Props {
  initialValues: any;
  onSubmit: any;
  validationSchema: any;
  children: ReactElement;
}
const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* Need to pass formik props here or (formikProps) => {children(formikProps)} */}
      {({ ...formikProps }) => (
        <>
          {/* Iterate of Children elements in the React compoent with formik */}
          {/* Children contains all form fields in this context i.e [<AppFormField/>, <AppFormField/>] */}
          {/* For each formik field we create a clone of the original elements but passing the formik props e.g. touched, values, errors to them  */}
          {/*Ensure that child components (like AppFormField, AppDropdownField) are automatically connected to Formik without needing boilerplate.  */}
          {React.Children.map(children, (child) =>
            React.cloneElement(child, formikProps)
          )}
        </>
      )}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
